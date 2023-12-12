"use server";
import { z } from "zod";

export async function createForm(
  prevState: {status:  "success" | "failed" | "", message: string },
  formData: FormData
) {
  const schema = z.object({
    formName: z.string({
      invalid_type_error: "At least 5 characters are required for name",
    }).min(5),
    description: z.string().optional(),
  });

  const validatedFields = schema.safeParse({
    formName: formData.get("formName"),
    description: formData.get("description"),
  });



  if(!validatedFields.success){
    return{
        message: validatedFields.error.flatten().fieldErrors,
        status: "failed"
    }
  }

  return { message: "New Form Created", status: "success" };
}
