import axios from "axios";
import { revalidatePath } from "next/cache";

export const deleteForm = async ({ formId }: { formId: string }) => {
  // const apiRes = await axios.delete(`http://localhost:3000/api/deleteForm`, {
  //   data: { formId },
  //   next: { revalidate: 0 }
  // });

  const apiRes = await fetch("http://localhost:3000/api/deleteForm",{
    method: "DELETE",
    body: JSON.stringify({ formId }),
    next: { revalidate: 0 }
    
  })
  console.log("deleteForm", apiRes);
  return apiRes;
};
