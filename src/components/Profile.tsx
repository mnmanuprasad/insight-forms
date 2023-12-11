"use client"
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export  function Profile() {
  const {data: session} =  useSession();
  const img = session?.user?.image || "";

  return (
    <div className="flex flex-col w-fit  shadow-xl rounded-md text-xs bg-white">
      <div className="flex gap-2 p-2 py-4 border-b-2 border-solid border-slate-200">
        <Image
          src={img}
          height={40}
          width={40}
          alt="Profile Image"
          className="rounded-full cursor-pointer "
        />
        <div className="flex flex-col gap-1">
          <p className="font-medium">{session?.user?.name}</p>
          <p className="text-slate-400">{session?.user?.email}</p>
        </div>
      </div>
      <p className="p-2 text-rose-800 hover:bg-slate-200 cursor-pointer"
        onClick={()=>signOut()}
      >
        Sign out
      </p>
    </div>
  );
}
