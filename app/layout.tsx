import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  metadataBase: new URL(
    "https://geekyacedigitalhub.com"
  ),


  title: {
    default:
      "Geekyace Digital Hub | Web Development, AI Solutions & Automation",

    template:
      "%s | Geekyace Digital Hub",
  },


  description:
    "Geekyace Digital Hub helps businesses grow with modern websites, AI solutions, mobile applications, automation systems, branding and digital experiences.",


  keywords: [
    "Web Development",
    "AI Solutions",
    "Business Automation",
    "Mobile App Development",
    "UI UX Design",
    "Digital Agency",
    "Geekyace Digital Hub",
  ],


  authors: [
    {
      name:
        "Geekyace Digital Hub",
    },
  ],


  creator:
    "Geekyace Digital Hub",


  publisher:
    "Geekyace Digital Hub",


  robots: {
    index: true,
    follow: true,
  },


  openGraph: {

    type:
      "website",

    locale:
      "en_US",

    url:
      "https://geekyacedigitalhub.com",

    siteName:
      "Geekyace Digital Hub",

    title:
      "Geekyace Digital Hub",

    description:
      "Premium websites, AI solutions, automation and digital experiences.",


    images: [
      {
        url:
          "/images/logo.png",

        width:
          1200,

        height:
          630,

        alt:
          "Geekyace Digital Hub",
      },
    ],
  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "Geekyace Digital Hub",

    description:
      "Modern websites, AI solutions and automation systems.",

    images:
      [
        "/images/logo.png",
      ],
  },

};



interface RootLayoutProps {

  children:
    React.ReactNode;

}



export default function RootLayout({
  children,
}: RootLayoutProps) {


  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >

      <body>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>

  );

}