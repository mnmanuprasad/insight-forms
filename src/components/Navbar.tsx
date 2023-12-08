import { getServerSession } from "next-auth";
import { sono } from "@/lib/fonts";
import { LibraryBig } from "lucide-react";
import Image from "next/image";

export async function Navbar() {
  const session = await getServerSession();
  const img = session?.user?.image || "";
  return (
    <div className="flex flex-col justify-center border-b-2 border-solid pb-1">
      <div className="flex items-center  mt-4 justify-between mx-2 ">
        <div className="flex gap-2 font-semibold items-center">
          <LibraryBig size={34} strokeWidth={1.2} />
          <h2 className={`${sono.className} text-2xl`}>Insight Forms</h2>
        </div>
        <Image 
            src={img}
            height={30}
            width={30}
            alt="Profile Image"
            className="rounded-full cursor-pointer lg:mr-2"
        />
      </div>
    </div>
  );
}
