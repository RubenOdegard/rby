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
import { Label } from "@/components/ui/label";
import { CopyIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import MailIcon from "./ui/svg/mail-icon";
import { useToast } from "@/components/ui/use-toast";

type TDialog = {
  height: number;
  width: number;
};

export default function ModalContactMe({ height, width }: TDialog) {
  const { toast } = useToast();
  const copyToClipboard = async () => {
    try {
      const input = document.getElementById("link") as HTMLInputElement;

      if (input) {
        await navigator.clipboard.writeText(input.value);
        toast({
          title: "Copied text",
          description: `${input.value} has been copied to your clipboard.`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `${error}`,
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label="mail icon, contact me"
          variant="ghost"
          size="icon"
          className="px-0"
        >
          <MailIcon height={height} width={width} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Get in touch</DialogTitle>
          <DialogDescription>
            I&apos;ll get back to you in a bit.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue="me@rubenodegard.com" readOnly />
          </div>
          <Button
            aria-label="copy text from input"
            type="submit"
            size="sm"
            className="px-3"
            onClick={copyToClipboard}
          >
            <span className="sr-only">Copy</span>
            <CopyIcon className="h-4 w-4" />
          </Button>
        </div>
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
