CREATE SCHEMA "insightForms";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "insightForms"."forms" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"form_name" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "insightForms"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"email" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "insightForms"."forms" ADD CONSTRAINT "forms_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "insightForms"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
