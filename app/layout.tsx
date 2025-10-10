import type { Metadata } from "next";
import "./globals.css";
import ClientNavWrapper from "@/components/ClientNavWrapper";

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
      <body className="antialiased">
        {/* Navigation Bar */}
        <div className="pb-16">{/* Add padding to prevent content under nav */}
          <ClientNavWrapper />
          {children}
        </div>
      </body>
    </html>
  );
}
