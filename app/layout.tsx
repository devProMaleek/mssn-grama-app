import type { Metadata } from "next";
import "./globals.css";
import { clashDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "MSSN GRAMA",
  description:
    "This the official event website of the Muslim Students' Society of Nigeria, GRAMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clashDisplay.className}>{children}</body>
    </html>
  );
}
