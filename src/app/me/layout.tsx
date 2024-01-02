"use client"
import { Navbar } from "@/components/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { Toaster } from "react-hot-toast";

export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-100 min-h-full">
        <Navbar />
        {children}
        {/* <Toaster position="bottom-right" /> */}
      </div>
    </QueryClientProvider>
  );
}
