import type { Metadata } from "next";
import { Fraunces, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const accent = Cormorant_Garamond({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raka Adrianto — Technical Manager · Product & Data · Sustainability",
  description:
    "Raka Adrianto — Technical Manager at Siemens Zürich. Sustainability programs, Scope 3 decarbonization, eco-design, and AI products for climate tech. PhD ETH Zürich, MBA Imperial.",
  openGraph: {
    title: "Raka Adrianto — Technical Manager · Product & Data · Sustainability",
    description:
      "Technical Manager at Siemens Zürich. Sustainability programs, Scope 3, ecodesign, and AI products for climate tech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col grain">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
