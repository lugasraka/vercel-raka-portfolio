import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
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
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
