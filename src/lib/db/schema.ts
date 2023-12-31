import { sql } from "drizzle-orm";
import { integer, timestamp, pgSchema, serial, text } from "drizzle-orm/pg-core";

export const schema = pgSchema("insightForms");

export const users = schema.table("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text('email')
});

export const forms = schema.table("forms",{
    id: serial("id").primaryKey(),
    userId: integer("user_id").references(()=>users.id),
    formName: text('form_name').notNull(),
    description: text('description'),
    createdAt: timestamp('created_at').notNull().default(sql`now()`),
})

export type formsType = typeof forms;

