import { Landing } from "@/components/Landing";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export  default async function Home() {
  const session = await getServerSession();

  if (!session?.user?.userId) {
    redirect("/me")
  }
  return(
    <Landing />
  )
}
