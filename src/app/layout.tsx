import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shyam Jaiswal | Web3 Developer",
  description: "Portfolio of Shyam Jaiswal, Web2 & Web3 Developer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-dark text-text-primary overflow-x-hidden selection:bg-accent selection:text-dark">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
