import Link from "next/link";
import ContactDialog from "./contact-dialog";
import Image from "next/image";

export default function LanguageToggle() {
  return (
    <>
      <div className="flex gap-4 text-xs items-center border-ring/10 border bg-card/50 px-2 py-1 rounded-lg z-40">
        {/* TODO: conditionally render text-secondary-foreground dependent on .com/.no domain. */}
        {
          /*
        <Link
          href="/"
          className="no-underline text-foreground font-semibold flex gap-1 items-center"
        >
          */
        }
        <Image
          src="/flags/gb-flag.svg"
          alt="flag of great britain"
          height={14}
          width={17}
        />{" "}
        EN
        {
          /*         </Link>
          */
        }
        {
          /*
        <Link
          href="/"
          className="no-underline text-muted flex gap-1 items-center"
        >
          */
        }

        <Image
          src="/flags/no-flag.svg"
          alt="flag of norway"
          height={14}
          width={14}
        />{" "}
        NO
        {
          /*
        </Link>
          */
        }
      </div>
    </>
  );
}
