import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
// import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";

const qs = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peak Serve",
  description: "We Deliver Without Complaints",
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
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
