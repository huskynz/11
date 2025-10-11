
import type { Metadata } from "next";
import "./globals.css";
import ClientNavWrapper from "@/components/ClientNavWrapper";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HuskyNZ | Peter Gallwas",
  description: "Solutions Architect & Technology Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {/* Navigation Bar */}
  <div className="flex-1 flex flex-col">
          <ClientNavWrapper />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
