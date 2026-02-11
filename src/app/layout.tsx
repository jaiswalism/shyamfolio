import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
