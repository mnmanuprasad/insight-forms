import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Me() {
  const session = await getServerSession();
  if(!session?.user?.email){
    redirect("/")
  }
  return (
    <>
      <Navbar />
    </>
  );
}
