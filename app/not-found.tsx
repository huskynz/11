import type { Metadata } from "next";
import { NotFound } from "@/components/404";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
