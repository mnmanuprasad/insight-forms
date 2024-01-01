"use client"
import { Navbar } from "@/components/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-slate-100 h-full">
        <Navbar />
        {children}
      </div>
    </QueryClientProvider>
  );
}
