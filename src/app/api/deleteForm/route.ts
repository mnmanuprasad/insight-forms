import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { z } from "zod";
import { forms } from "@/lib/db/schema";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { and, eq  } from "drizzle-orm";

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.userId) {
    return { message: "Something went wrong", status: "failed" };
  }

  const userId = session.user.userId;

  const payloadData =  await request.json()

  const formId = payloadData.formId;

  // const schema = z.object({
  //   formId: z.string().trim().min(2),
  // });

  // const validatedFields = schema.safeParse(request.body);

  // if (!validatedFields.success) {
  //   return NextResponse.json(
  //     { message: "Something went wrong", status: "failed" },
  //     { status: 400 }
  //   );
  // }

  const response = db
    .delete(forms)
    .where(
      and(
        eq(forms.userId, userId),
        eq(forms.id, formId)
      )
    );

  return NextResponse.json({message: "success", status: "success"});
}
