import { FormListing } from "@/components/FormListing";
import { getAllUserForms } from "@/lib/db/helpers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function Forms(){
    const session = await getServerSession(authOptions);
    const userId = session?.user.userId;
    const userForms = await getAllUserForms(userId);
    return(
        <div className="mt-2 flex justify-center items-center">
            <FormListing userForms={userForms} />
        </div>
    )
}