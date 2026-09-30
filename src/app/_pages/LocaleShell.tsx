import { NextIntlClientProvider } from "next-intl";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import CustomCursor from "@/app/components/CustomCursor";

// Shared <html>/<body> shell for both locale route groups. Locale and messages
// are passed in statically by each root layout so lang/dir and translations are
// baked into the prerendered HTML (no request-time locale lookup).
export default function LocaleShell({
  locale,
  messages,
  children,
}: Readonly<{
  locale: "en" | "ar";
  messages: Record<string, unknown>;
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="light"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body
        suppressHydrationWarning
        className="flex flex-col min-h-screen relative text-white ltr:font-neue-montreal rtl:font-ibm-plex-arabic"
        style={{
          background:
            "linear-gradient(189.91deg, #000000 77.69%, #231708 89.53%, #BE7B2D 142.18%)",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
