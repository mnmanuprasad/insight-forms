import { Navbar } from "@/components/Navbar"

export default function MeLayout({ children }: {children: React.ReactNode}) {
  return (
      <>
        <Navbar />
        {children}
      </>
  )
}
