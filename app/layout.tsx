import type { Metadata } from "next";
import {
  Pixelify_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import React from "react";



const pixelify = Pixelify_Sans({
  variable: "--pixel-font",
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
  adjustFontFallback: false,
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={pixelify.variable}>
    <head>
      <base href="/portfolio/" />
    </head>
      <body className={`${pixelify.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
