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
      <div className="bg-slate-100 h-[94vh] overflow-y-hidden flex flex-col justify-around">
      <CreateFormDialog />
      </div>
    </div>
  );
}
