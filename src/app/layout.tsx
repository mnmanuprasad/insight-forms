import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insight Forms",
  description: "Unlock the Power of Effortless Data Collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} min-w-[320px]`}>{children}</body>
      </AuthProvider>
    </html>
  );
}
