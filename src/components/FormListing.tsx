import {
  Card,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Trash2, Eye, FileEdit } from "lucide-react";
import { TooltipWrapper } from "./TooltipWrapper";

export async function FormListing({ userForms }: { userForms: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 2xl:grid-cols-6  gap-2  justify-items-center">
      {userForms.map((forms) => {
        return (
          <Card key={forms.id} className="w-[27ch]">
            <CardHeader>
              <CardTitle className="truncate">{forms.formName}</CardTitle>
              <CardDescription className="truncate">
                {forms.description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="bottom-0 relative">
              <div className="w-full flex justify-around">
                <TooltipWrapper toolTipText="Preview Form">
                  <Eye className="cursor-pointer text-sky-600 hover:text-sky-500" />
                </TooltipWrapper>
                <TooltipWrapper toolTipText="Edit Form">
                  <FileEdit className="cursor-pointer text-indigo-600 hover:text-indigo-500" />
                </TooltipWrapper>
                <TooltipWrapper toolTipText="Delete Form">
                  <Trash2 className="cursor-pointer text-red-600 hover:text-red-500" />
                </TooltipWrapper>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
