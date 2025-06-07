import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Small and Local Beer Co.",
  description: "Ottawa's neighborhood brewery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 bg-[--color-primary] text-white">
          <nav className="flex gap-4">
            <a href="/" className="font-bold">Home</a>
            <a href="/beers">Beers</a>
            <a href="/taproom">Taproom</a>
            <a href="/order">Order</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        {children}
        <footer className="p-4 bg-[--color-dark] text-white text-center mt-8">
          <p>© {new Date().getFullYear()} Small and Local Beer Co.</p>
        </footer>
      </body>
    </html>
  );
}
