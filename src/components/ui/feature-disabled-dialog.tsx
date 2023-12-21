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
import { Button } from "./button";
import { ReactNode } from "react";

type TFeatureDisabledDialog = {
  children: ReactNode;
};

export default function FeatureDisabledDialog(
  { children }: TFeatureDisabledDialog,
) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label="disabled feature dialog"
          variant="ghost"
          className="z-50"
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Feature disabled.</DialogTitle>
          <DialogDescription>
            This feature is disabled or has not yet been implemented.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button aria-label="close dialog" type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
