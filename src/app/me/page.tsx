import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { CreateFormDialog } from "@/components/CreateFormDialog";
import { FormListing } from "@/components/FormListing";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getLatestUserForms } from "@/lib/db/helpers";

export default async function Me() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/");
  }
  const userId = session?.user.userId;
  const userForms = await getLatestUserForms(userId);

  return (
    <div>
      <div className="h-[94vh] flex flex-col justify-around gap-2 items-center">
        <div className="hidden md:block">
          <FormListing userForms={userForms} />
        </div>
        <CreateFormDialog />
      </div>
    </div>
  );
}
