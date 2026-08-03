import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Avi Lanka",
    template: "%s | Avi Lanka",
  },
  description:
    "Discover Sri Lanka with private tours, authentic experiences, and tailor-made journeys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}