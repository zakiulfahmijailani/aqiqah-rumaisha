import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqiqah Rumaisha Qonita",
  description:
    "Undangan Syukuran Aqiqah putri Bapak Tri Rachmat Riski & Ibu Upita Anggunsuri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#fff0f5" />
      </head>
      <body className="min-h-screen locked">{children}</body>
    </html>
  );
}
