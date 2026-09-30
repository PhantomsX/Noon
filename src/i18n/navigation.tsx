"use client";

import NextLink from "next/link";
import {
  usePathname as useNextPathname,
  useRouter as useNextRouter,
} from "next/navigation";
import { useLocale } from "next-intl";
import { forwardRef, startTransition } from "react";
import type { ComponentPropsWithoutRef } from "react";

// Dual-tree locale routing (no next-intl middleware / no rewrites).
// English pages live at unprefixed URLs, Arabic pages under "/ar".
// The active locale is read from NextIntlClientProvider (set statically per
// route group), so these helpers know how to prefix links correctly.

type Locale = "en" | "ar";

/** Prefix an app-relative href with "/ar" when the active locale is Arabic. */
export function localizeHref(href: string, locale: string): string {
  if (!href.startsWith("/")) return href;
  if (locale !== "ar") return href;
  if (href === "/") return "/ar";
  return `/ar${href}`;
}

/** Strip the "/ar" prefix so consumers see the locale-agnostic pathname. */
function stripLocale(pathname: string): string {
  if (pathname === "/ar") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  return pathname;
}

type LinkProps = Omit<ComponentPropsWithoutRef<typeof NextLink>, "href"> & {
  href: string;
  locale?: Locale;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, locale, ...rest },
  ref,
) {
  const activeLocale = useLocale();
  const target = localizeHref(href, locale ?? activeLocale);
  return <NextLink ref={ref} href={target} {...rest} />;
});

/** Returns the current pathname without the locale prefix. */
export function usePathname(): string {
  return stripLocale(useNextPathname() ?? "/");
}

/**
 * Locale-aware router. `replace`/`push` accept a locale-agnostic href plus an
 * optional `{ locale }` to switch language while preserving the current page.
 */
export function useRouter() {
  const router = useNextRouter();
  const activeLocale = useLocale();

  const navigate =
    (method: "push" | "replace") =>
    (href: string, options?: { locale?: Locale }) => {
      const target = localizeHref(href, options?.locale ?? activeLocale);
      startTransition(() => {
        router[method](target);
      });
    };

  return {
    ...router,
    push: navigate("push"),
    replace: navigate("replace"),
  };
}

/** Build a localized href without rendering (mirror of next-intl's getPathname). */
export function getPathname({
  href,
  locale,
}: {
  href: string;
  locale: Locale;
}): string {
  return localizeHref(href, locale);
}
