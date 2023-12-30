"use client";
import { useSession } from "next-auth/react";
import { sono } from "@/lib/fonts";
import { LibraryBig } from "lucide-react";
import Image from "next/image";
import { Profile } from "./Profile";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export function Navbar() {
  const { data: session } = useSession();
  const img = session?.user?.image || "";
  const [profileView, setProfileView] = useState(false);

  return (
    <div className="flex sticky top-0 bg-white flex-col justify-center border-b-2 border-solid pb-1">
      <div className="flex items-center  mt-2 justify-between mx-2 ">
        <Link href={"/"}>
          <div className="flex gap-2 cursor-pointer font-semibold items-center">
            <LibraryBig size={34} strokeWidth={1.2} />
            <h2 className={`${sono.className} text-2xl`}>Insight Forms</h2>
          </div>
        </Link>
        <div>
          <Image
            src={img}
            height={30}
            width={30}
            alt="Profile Image"
            className="rounded-full cursor-pointer lg:mr-2"
            onClick={() => setProfileView(!profileView)}
          />
        </div>
      </div>
      <div
        className={clsx("absolute top-14 right-3", {
          hidden: profileView == false,
          block: profileView == true,
        })}
      >
        <Profile setProfileView={setProfileView} />
      </div>
    </div>
  );
}
