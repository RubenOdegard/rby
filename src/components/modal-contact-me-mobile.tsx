"use client";
import ContactDialog from "@/components/modal-contact-me";

export default function CTAMobile() {
  return (
    <div className="flex md:hidden max-h-screen">
      {/* CTA floating on mobile */}
      <div className=" z-50 fixed bottom-4 right-4 transition-all duration-200 rounded-md bg-foreground text-background border border-ring/20">
        <ContactDialog height={16} width={16} />
      </div>
    </div>
  );
}
