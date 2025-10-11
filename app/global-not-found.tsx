// Import global styles and fonts
import './globals.css'
import { NotFound } from '../components/404'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from "@/components/Footer";
import Nav from '@/components/Nav';
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <NotFound />
        <Footer />
      </body>
    </html>
  );
}