import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanzeel's Portfolio",
  description: "Created by Tanzeel",
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico", 
    apple: "apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
