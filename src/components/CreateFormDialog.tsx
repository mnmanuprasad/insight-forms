import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CreateForm } from "./CreateForm"
import { Textarea } from "./ui/textarea"

export function CreateFormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CreateForm />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A New Form</DialogTitle>
          <DialogDescription>
            Fill the form details
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <Input placeholder="Form Name" id="name"  className="col-span-3" />
            <Textarea placeholder="Description" id="description" className="col-span-3" />
        </div>
        <DialogFooter>
          <Button type="submit">Create Form</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
