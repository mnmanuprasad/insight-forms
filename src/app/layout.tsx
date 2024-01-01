import type { Metadata } from "next";
import AuthProvider from "./context/AuthProvider";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { Toaster } from "react-hot-toast";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Insight Forms",
  description: "Unlock the Power of Effortless Data Collection",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
          <body
            className={`${inter.className} min-w-[320px] h-[100vh] w-[100vw] `}
          >
            {children}
            <Toaster position="bottom-right" />
          </body>
      </AuthProvider>
    </html>
  );
}
