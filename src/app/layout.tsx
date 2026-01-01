import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from './components/reusables/Navbar';
import Footer from "./components/reusables/Footer";

const rubikSans = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codeteca - Share code",
  description: "Lorem Ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubikSans.variable} antialiased`}
      >
        <Navbar></Navbar>
      
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
