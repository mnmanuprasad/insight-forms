import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export async function FormListing({ userForms }: { userForms: any[] }) {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-6  gap-2  justify-items-center">
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
