import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Tayyab | Full Stack Developer Portfolio",
  description:
    "Professional portfolio of Muhammad Tayyab — Full Stack Developer specializing in Next.js, TypeScript, React, Node.js, Python, and PostgreSQL. BSCS Student at University of Sargodha.",
  keywords: [
    "Muhammad Tayyab",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
    "Web Developer",
    "Node.js",
    "Python",
    "PostgreSQL",
  ],
  authors: [{ name: "Muhammad Tayyab" }],
  openGraph: {
    title: "Muhammad Tayyab | Full Stack Developer",
    description: "Building modern web experiences with Next.js, TypeScript & cutting-edge technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
