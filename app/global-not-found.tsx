import "./globals.css";
import type { Metadata } from "next";
import GridScrollBG from "@/components/GridScrollBG";
import Footer from "@/components/Footer";
import { NotFound } from "@/components/404";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <GridScrollBG />
        <div className="flex-1 flex flex-col">
          <NotFound />
        </div>
        <Footer />
      </body>
    </html>
  );
}
