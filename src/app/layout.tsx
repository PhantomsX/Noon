import type { Metadata } from "next";
import "./globals.css";
import { getLocale, getMessages } from "next-intl/server";
import Navbar from "./components/navbar";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./components/Footer";
import { Noto_Kufi_Arabic, ABeeZee } from "next/font/google";
import { cn } from "@/lib/utils";

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const aBeeZee = ABeeZee({
  subsets: ["latin"],
  variable: "--font-abeezee",
  weight: ["400"],
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
          `flex flex-col min-h-screen relative text-white ltr:font-neue-montreal rtl:font-noto-kufi-arabic`,
          notoKufiArabic.variable,
          aBeeZee.variable,
        )}
        style={{
          background:
            "linear-gradient(189.91deg, #000000 77.69%, #231708 89.53%, #BE7B2D 142.18%)",
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
