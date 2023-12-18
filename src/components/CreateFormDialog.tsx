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
import { SyntheticEvent, useEffect, useState } from "react";
import toast from 'react-hot-toast'

const initialState = {
  message: "",
  status: "",
};

export function CreateFormDialog() {
  const [state, formAction] = useFormState(createForm, initialState);
  const [dialogState, setDialogState] = useState(false);


  useEffect(() => {
    if (state.message) {
      if (state.status == "failed") {
        toast.error(state.message as string);
      } else {
        toast.success(state.message as string);
      }
    }
  }, [state]);


  function updateDialogState(state: boolean){
      setDialogState(state)
  }

  function addNewForm(event: SyntheticEvent) {
    console.log(event);
  }

  return (
    <Dialog open={dialogState}>
      <DialogTrigger
        onClick={() => setDialogState(true)}
        className="w-9/12 flex flex-col items-center"
      >
        <CreateForm />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" updatDialogState={updateDialogState}>
        <DialogHeader>
          <DialogTitle>Create A New Form</DialogTitle>
          <DialogDescription>Fill the form details</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(event) => {
            addNewForm(event);
            setDialogState(false);
          }}
          action={formAction}
          className="grid gap-4 py-4 "
        >
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

          <DialogClose asChild>
            <DialogFooter className="relative right-9">
              <Button type="submit">Create Form</Button>
            </DialogFooter>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
