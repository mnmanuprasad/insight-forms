import { desc, eq } from "drizzle-orm";
import { db } from ".";
import { forms, users } from "./schema";

export const  getLatestUserForms = async (userID: number)=>{
    const result = await db.select().from(forms).where(eq(forms.userId,userID)).orderBy(desc(forms.createdAt)).limit(6);
    return result
}


export const  getAllUserForms = async (userID: number)=>{
    const result = await db.select().from(forms).where(eq(forms.userId,userID)).orderBy(desc(forms.createdAt))
    return result
}