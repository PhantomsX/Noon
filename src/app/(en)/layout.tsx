import type { Metadata } from "next";
import "../globals.css";
import LocaleShell from "@/app/_pages/LocaleShell";
import enMessages from "@/../messages/en.json";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NOON",
  description:
    "noon Consultants is one of the recognized Architecture in the KSA.",
};

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LocaleShell locale="en" messages={enMessages}>
      {children}
    </LocaleShell>
  );
}
