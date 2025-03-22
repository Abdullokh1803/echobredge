import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavResponsive from './../components/navbar/nav_responsive';

const font = Poppins({weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin']})

export const metadata: Metadata = {
  title: "EchoBridge",
  description: "Seamless speech & sign language translation for global communication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <NavResponsive />
        {children}
      </body>
    </html>
  );
}
