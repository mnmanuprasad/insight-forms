import { getServerSession } from "next-auth";

export default async function SignIn(){
    const session = await getServerSession()
   
    return(
        <h1>{session?.user?.name}</h1>
    )
}
