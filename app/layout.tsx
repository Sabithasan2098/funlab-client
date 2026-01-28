import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shered/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#152121] text-white`}
      >
        <Navbar />
        <div className="max-w-7xl mx-auto min-h-screen bg-[#0f1110] px-6 py-4">
          {children}
        </div>
      </body>
    </html>
  );
}
