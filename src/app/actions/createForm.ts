"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { forms } from "@/lib/db/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { revalidatePath } from "next/cache";

export async function createForm(prevState: any, formData: FormData) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return { message: "Something went wrong", status: "failed" };
    }
    const schema = z.object({
      formName: z.string().trim().min(2),
      description: z.string().optional(),
    });

    const validatedFields = schema.safeParse({
      formName: formData.get("formName"),
      description: formData.get("description"),
    });

    if (!validatedFields.success) {
      return {
        message:
          validatedFields.error.formErrors.fieldErrors.description ||
          validatedFields.error.formErrors.fieldErrors.formName,
        status: "failed",
      };
    }
    const { data } = validatedFields;

    if (!session.user.userId) {
      return { message: "Something went wrong", status: "failed" };
    }
    await db.insert(forms).values({
      userId: session.user.userId,
      formName: data.formName,
      description: data.description,
    });
    revalidatePath("/me")
    return { message: "New Form Created", status: "success" };

  } catch (error) {
    return { message: "Something went wrong", status: "failed" };
  }
}
