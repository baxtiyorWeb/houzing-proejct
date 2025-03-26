"use client"; // <-- Qo'shish kerak

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QueryProvider from "@/providers/QueryProvider";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/register");
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <QueryProvider>
          {!isAuthPage && <Header />}
          <div className="flex-grow">{children}</div>
          {!isAuthPage && <Footer />}
        </QueryProvider>
      </body>
    </html>

  );
}
