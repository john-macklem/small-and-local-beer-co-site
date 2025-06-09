import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-[--color-primary] text-white">
          <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
            <a href="/" className="font-display text-xl font-semibold">
              Small &amp; Local
            </a>
            <nav className="flex gap-4 text-sm md:text-base">
              <a href="/beers">Beers</a>
              <a href="/taproom">Taproom</a>
              <a href="/order">Order</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="p-4 bg-[--color-dark] text-white text-center mt-8">
          <p>© {new Date().getFullYear()} Small and Local Beer Co.</p>
        </footer>
      </body>
    </html>
  );
}
