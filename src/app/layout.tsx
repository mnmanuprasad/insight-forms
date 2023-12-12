import type { Metadata } from "next";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { inter } from "@/lib/fonts";

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
        <body className={`${inter.className} min-w-[320px]`}>
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
