import { Navbar } from "@/components/Navbar"

export default function MeLayout({ children }: {children: React.ReactNode}) {
  return (
      <div className="bg-slate-100 h-full">
        <Navbar />
        {children}
      </div>
     
  )
}
