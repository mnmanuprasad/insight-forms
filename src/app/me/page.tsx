import { Navbar } from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CreateFormDialog } from "@/components/CreateFormDialog";

export default async function Me() {
  const session = await getServerSession();
  if (!session?.user?.email) {
    redirect("/");
  }
  return (
    <div>
      <Navbar />
      <div className="bg-slate-100 h-[94vh] flex flex-col justify-around items-center">
      <CreateFormDialog />
      </div>
    </div>
  );
}
