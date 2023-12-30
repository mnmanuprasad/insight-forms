"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Link from "next/link";

export function Profile({ setProfileView }: {setProfileView: (value: boolean) => void}) {
  const { data: session } = useSession();
  const img = session?.user?.image || "";
  return (
    <div
      tabIndex={0}
      onBlur={() => {
        setProfileView(false);
      }}
      className="flex flex-col w-fit  shadow-xl rounded-md text-xs bg-white"
    >
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
      <div>
      <Link href={"/me"}>
          {" "}
          <p className="p-2 font-medium hover:bg-slate-200 cursor-pointer border-b-2 border-dashed border-slate-200">
            My Profile
          </p>
        </Link>
        <Link href={"/me/forms"}>
          {" "}
          <p className="p-2 font-medium hover:bg-slate-200 cursor-pointer border-b-2 border-dashed border-slate-200">
            Forms
          </p>
        </Link>
      </div>
      <div>
        <p
          className="p-2 text-rose-800 hover:bg-slate-200 cursor-pointer"
          onClick={() => signOut()}
        >
          Sign out
        </p>
      </div>
    </div>
  );
}
