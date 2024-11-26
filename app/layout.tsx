import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Learnchain Test",
  description: "Coursera Login page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased bg-background space-y-10 px-5 md:px-0  `}
      >
        <div className="">
          {children}
        </div>
      </body>
    </html>
  );
}
