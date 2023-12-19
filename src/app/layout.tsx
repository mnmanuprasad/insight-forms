import type { Metadata } from "next";
import AuthProvider from "./context/AuthProvider";
import "./globals.css";
import { inter } from "@/lib/fonts";
import  { Toaster } from 'react-hot-toast';

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
        <body className={`${inter.className} min-w-[320px] h-[100vh] w-[100vw] `} style={{ background: 'radial-gradient(at 50% 40%, rgb(255, 255, 255), transparent 80%) 0% 0% repeat scroll, radial-gradient(at 50% -47%, rgb(172, 224, 249), transparent 80%) 0% 0% repeat scroll, radial-gradient(at 0% 0%, rgb(232, 225, 255) 0px, transparent 32%) 0% 0% repeat scroll, radial-gradient(at 100% 98%, rgb(255, 241, 235), transparent) 0% 0% repeat scroll, radial-gradient(at 0px 97%, rgb(227, 235, 255), white) 0% 0% repeat scroll rgba(0, 0, 0, 0)', zIndex: 9999999 }}>
          {children}
          <Toaster  position="bottom-right"/>
        </body>
      </AuthProvider>
    </html>
  );
}
