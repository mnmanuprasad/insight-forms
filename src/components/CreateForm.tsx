import Image from "next/image"
export function CreateForm(){
    return(
        <div className="flex flex-col items-center gap-2 cursor-pointer border-2 border-dashed py-20 w-9/12 rounded-lg hover:border-slate-400">
          <Image
            src="/icons/checklist.png"
            height={50}
            width={50}
            alt="Form Icon"
          />
          <p className={`font-medium`}>Create A New Form</p>
        </div>
    )
}