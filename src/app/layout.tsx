import type { Metadata } from "next";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import Navbar from "./components/navbar";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./components/Footer";
import { Amiri,  Noto_Kufi_Arabic } from "next/font/google";
import { cn } from "@/lib/utils";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["latin"],
  variable: "--font-noto-kufi-arabic",
  weight: ["400", "700"],
  display: "swap",
});
const amiri = Amiri({
  subsets: ["latin"],
  variable: "--font-amiri",
  weight: ["400", "700"],
  display: "swap",
});

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
        className={cn(
          `flex flex-col min-h-screen relative main-bg-gradient text-white ltr:font-neue-montreal rtl:font-noto-kufi-arabic`,
          notoKufiArabic.variable,
          amiri.variable
        )}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-[#f9c39d]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-gradient-to-tl from-[#f9c39d]/20 to-transparent rounded-full blur-3xl" />
        </div>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
