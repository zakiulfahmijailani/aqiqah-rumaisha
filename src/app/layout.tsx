import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqiqah Izhan Faqqihhu Fiddin",
  description:
    "Undangan Syukuran Aqiqah putra Bapak Zakiul Fahmi Jailani & Ibu Kemala Putri Ayunda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#fafaeb" />
      </head>
      <body className="min-h-screen locked">{children}</body>
    </html>
  );
}
