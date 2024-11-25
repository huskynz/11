import "~/styles/globals.css";

import { type Metadata } from "next";

const MasterClassNames = "bg-gradient-to-b from-[#932adc] to-[#ee378b] text-white font-['Open_Sans'] min-h-screen"

export const metadata: Metadata = {
  title: "HuskyNZ",
  description: "HuskyNZ",
  icons: [{ rel: "icon", url: "https://serv.husky.nz/logo/default180.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={MasterClassNames}>
      <body>{children}
      </body>
    </html>
  );
}
