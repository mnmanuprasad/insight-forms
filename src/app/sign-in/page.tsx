import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn(){
    const session = await getServerSession()
    if(session?.user?.email){
        redirect("/me")
    }
 
    redirect("/")
}
