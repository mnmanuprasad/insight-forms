"use client"
import { LibraryBig } from "lucide-react";
import { sono } from "../lib/fonts";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export  function Landing(){
    const {data: session} = useSession() 
    const email = session?.user?.email

    if(email){
      redirect("/me")
    }

    return (
        <div className="flex flex-col justify-center">
          <div className="flex items-center  mt-4 justify-between mx-2">
            <div className="flex gap-2 font-semibold items-center">
              <LibraryBig size={34} strokeWidth={1.2} />
              <h2 className={`${sono.className} text-2xl`}>Insight Forms</h2>
            </div>
            {!email ? (
              <Button
                onClick={() =>
                  signIn("google", { callbackUrl: "/sign-in", redirect: true })
                }
              >
                Sign In
              </Button>
            ) : (
              <Button
              onClick={() =>
                signOut()
              }
              >Sign Out</Button>
            )}
          </div>
    
          <div className="mt-20 flex flex-col items-center">
            <h1 className="text-4xl font-semibold text-center">
              Unlock the Power of Effortless Data Collection
            </h1>
            <p className="text-center px-8 mt-5 place-self-center max-w-xl">
              Enhance your data management experience by signing in to your Insight
              Form account. Whether you are a business owner, manager, or a
              passionate individual, our platform is designed to simplify the way
              you collect, manage data.
            </p>
          </div>
    
          <Button 
          onClick={() =>
            signIn("google", { callbackUrl: "/sign-in", redirect: true })
          }
          className="w-fit mt-12 place-self-center">
              Get started, Its free
          </Button>
    
          <Image
            width={450}
            height={600}
            className="mt-5 place-self-center  md:w-7/12 lg:w-5/12 xl:w-4/12"
            src="/cover.png"
            alt="Screenshot of the Form Insight Home Page"
          />
        </div>
      );
}