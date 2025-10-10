import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
