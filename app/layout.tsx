import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const qs = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Site Name",
  description: "The New Site Name",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={qs.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
