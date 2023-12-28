import { getUserForms } from "@/lib/db/helpers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export async function FormListing() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.userId;
  const userForms = await getUserForms(userId);
  return (
    <div className="hidden md:grid md:grid-cols-3 2xl:grid-cols-6  gap-2  justify-items-center">
      {userForms.map((forms) => {
        return (
          <Card key={forms.id} className="w-[27ch]">
            <CardHeader>
              <CardTitle className="truncate">{forms.formName}</CardTitle>
              <CardDescription className="truncate">
                {forms.description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="gap-2">
              <Button>Edit</Button>
              <Button variant="secondary">Preview</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
