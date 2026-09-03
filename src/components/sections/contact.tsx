import { CalendarIcon, MailIcon } from "lucide-react";

import { contact, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading title={contact.heading} />
          <p className="mt-8 text-2xl font-medium leading-snug text-balance sm:text-3xl">
            {contact.booking}
          </p>
          <Button asChild size="lg" variant="accent" className="mt-6">
            <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer">
              <CalendarIcon />
              {contact.bookingButton}
            </a>
          </Button>

          <div className="mt-12 rounded-xl border bg-background p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <MailIcon className="size-5" />
              </span>
              <p className="leading-relaxed text-muted-foreground">
                Email me on{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-medium text-teal underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>{" "}
                or fill in the form below — I&apos;ll get back within a couple of
                days.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
