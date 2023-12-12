"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CreateForm } from "./CreateForm";
import { Textarea } from "./ui/textarea";
import { useFormState } from "react-dom";
import { createForm } from "@/app/actions/createForm";
import { useToast } from "./ui/use-toast";
import { useFormStatus } from "react-dom";
const initialState: {status: "success" | "failed" | "", message: string } = {
  message: "",
  status: ""
};

export function CreateFormDialog() {
  const [state, formAction] = useFormState(createForm, initialState);
  const {toast} = useToast()
  const { pending } = useFormStatus()
  return (
    <Dialog>
      <DialogTrigger className="w-9/12 flex flex-col items-center">
        <CreateForm />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A New Form</DialogTitle>
          <DialogDescription>Fill the form details</DialogDescription>
        </DialogHeader>
        <form action={formAction} className="grid gap-4 py-4 ">
          <Input
            placeholder="Form Name"
            name="formName"
            id="name"
            className="col-span-3"
          />
          <Textarea
            name="description"
            placeholder="Description"
            id="description"
            className="col-span-3"
          />

          <DialogClose>
            <DialogFooter className="relative right-9">
              <Button type="submit">Create Form</Button>
            </DialogFooter>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
