import { getServerSession } from "next-auth"
import { Navbar } from "@/components/Navbar"

export default async function Me(){
  return (
    <Navbar />
  )
}