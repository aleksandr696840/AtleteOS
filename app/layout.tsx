import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AthleteOS",
  description:
    "AI-powered athlete performance platform. Garmin API Integration. Recovery. Analytics. Training.",
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