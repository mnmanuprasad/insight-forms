import Image from "next/image";
import { getServerSession } from "next-auth";

export async function Profile() {
  const session = await getServerSession();
  const img = session?.user?.image || "";

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 p-2 border-b-2 border-solid border-slate-400">
        <Image
          src={img}
          height={40}
          width={40}
          alt="Profile Image"
          className="rounded-full cursor-pointer lg:mr-2"
        />
        <div className="flex flex-col gap-2  border-b-2 border-solid border-slate-400">
          <p className="text-stale-400">{session?.user?.name}</p>
          <p className="">{session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
}
