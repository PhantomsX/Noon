"use client";

import { useState } from "react";
import type { CSSProperties, SyntheticEvent } from "react";

// Direct Cloudflare Image Transformations delivery for same-zone /public raster
// images. Emits /cdn-cgi/image URLs so resizing happens at the Cloudflare edge
// instead of the Worker (/_next/image). Source files are never modified;
// width-only transforms preserve the original aspect ratio.
// Docs: https://developers.cloudflare.com/images/transform-images/

type Props = {
  /** Same-zone source, e.g. "/hero/IMAGE-1.jpg". */
  src: string;
  alt: string;
  /** Responsive candidate widths (ascending). */
  widths: number[];
  /** The `sizes` attribute controlling which candidate the browser picks. */
  sizes: string;
  /** Transformation quality (high by default; never a downgrade). */
  quality?: number;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  /** Fires only if the original-image fallback also fails (e.g. missing file). */
  onFallbackError?: () => void;
};

// Shared URL builder so preload logic and rendering stay on one strategy.
// fit defaults to scale-down (no upscaling past the source), no crop.
export function buildCloudflareImageUrl(
  src: string,
  width: number,
  quality = 90,
): string {
  const withSlash = src.startsWith("/") ? src : `/${src}`;
  // Encode each path segment so spaces / non-ASCII filenames stay valid.
  const normalized = withSlash
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  // onerror=redirect lets Cloudflare fall back to the original on transform failure.
  return `/cdn-cgi/image/width=${width},quality=${quality},format=auto,onerror=redirect${normalized}`;
}

export default function CloudflareResponsiveImage({
  src,
  alt,
  widths,
  sizes,
  quality = 90,
  className,
  style,
  priority = false,
  onFallbackError,
}: Props) {
  const [failed, setFailed] = useState(false);

  // First error: fall back to the untouched original (never the Worker).
  // Second error (original also broken): notify the caller so it can render its
  // own placeholder. Guarded so the fallback can't loop.
  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    if (failed) {
      onFallbackError?.();
      return;
    }
    setFailed(true);
    event.currentTarget.srcset = "";
    event.currentTarget.src = src;
  };

  const largest = widths[widths.length - 1];
  const defaultSrc = failed ? src : buildCloudflareImageUrl(src, largest, quality);
  const srcSet = failed
    ? undefined
    : widths.map((w) => `${buildCloudflareImageUrl(src, w, quality)} ${w}w`).join(", ");

  return (
    <img
      src={defaultSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      draggable={false}
      className={className}
      style={style}
      onError={handleError}
    />
  );
}
