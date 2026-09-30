import type { Metadata } from "next";
import "../globals.css";
import LocaleShell from "@/app/_pages/LocaleShell";
import arMessages from "@/../messages/ar.json";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NOON",
  description:
    "noon Consultants is one of the recognized Architecture in the KSA.",
};

export default function ArLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LocaleShell locale="ar" messages={arMessages}>
      {children}
    </LocaleShell>
  );
}
