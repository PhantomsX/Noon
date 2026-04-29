import type { Metadata } from "next";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import Navbar from "./components/navbar";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "NOON",
  description:
    "noon Consultants is one of the recognized Architecture in the KSA.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

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
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
