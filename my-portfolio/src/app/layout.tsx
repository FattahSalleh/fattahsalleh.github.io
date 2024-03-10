import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'] 
});

export const metadata: Metadata = {
  title: "Fattah Salleh | Full Stack Developer",
  description: "Fattah Salleh's portfolio created in 2024 using Next JS",
  icons: [
    {
      rel: 'icon',
      url: '/images/fs-icon.svg',
      sizes: 'any',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={poppins.className}>{children}</body>
      {/* <body className="Poppins">{children}</body> */}
    </html>
  );
}
