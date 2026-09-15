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

const siteUrl = "https://ahmed-adel-goda.vercel.app";
const siteTitle = "Ahmed Adel Goda — Full-Stack & ML Developer";
const siteDescription =
  "Computer Engineering student building full-stack apps, machine learning systems, and embedded/low-level software. Graduation project: Eshara, a bilingual sign language recognition platform.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s — Ahmed Adel Goda",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  keywords: [
    "Ahmed Adel Goda",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "Computer Engineering",
    "React",
    "Next.js",
    "Flutter",
    "Node.js",
    "Sign Language Recognition",
    "Eshara",
  ],
  authors: [{ name: "Ahmed Adel Goda", url: "https://github.com/ahmed171102" }],
  creator: "Ahmed Adel Goda",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description:
      "Full-stack, machine learning, and systems projects, including Eshara — a bilingual sign language recognition platform.",
    url: siteUrl,
    siteName: "Ahmed Adel Goda — Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahmed Adel Goda",
  url: siteUrl,
  jobTitle: "Full-Stack & Machine Learning Developer",
  alumniOf: "Computer Engineering",
  sameAs: [
    "https://github.com/ahmed171102",
    "https://linkedin.com/in/ahmed171102",
  ],
  knowsAbout: [
    "Full-Stack Development",
    "Machine Learning",
    "Embedded Systems",
    "React",
    "Next.js",
    "Flutter",
    "Node.js",
    "Python",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
