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
  title: "Ahmed Adel Goda — Portfolio",
  description:
    "Computer Engineering student building full-stack apps, machine learning systems, and embedded/low-level software. Graduation project: Eshara, a bilingual sign language recognition platform.",
  metadataBase: new URL("https://ahmedadel.dev"),
  openGraph: {
    title: "Ahmed Adel Goda — Portfolio",
    description:
      "Full-stack, machine learning, and systems projects, including Eshara — a bilingual sign language recognition platform.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
