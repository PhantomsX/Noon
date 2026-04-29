"use client";
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

const BlogsPage = () => {
  const t = useTranslations("comingSoonPage");
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement("script");
    script.src = "https://www.juicer.io/embed/nnc-ksa/embed-code.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    scriptLoadedRef.current = true;

    return () => {
      // Cleanup: remove the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <main className="w-full">
      <div className="py-20 md:py-32">
        <ul className="juicer-feed" data-feed-id="nnc-ksa"></ul>
      </div>
    </main>
  );
};

export default BlogsPage;
