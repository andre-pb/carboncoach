import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { cta } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-navy text-white">
      <div className="container-x flex flex-col items-start gap-8 py-16 sm:py-20 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-2xl font-medium leading-snug text-balance sm:text-3xl">
          {cta.text}
        </p>
        <Button asChild size="lg" variant="accent" className="shrink-0">
          <Link href={cta.button.href}>
            {cta.button.label}
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
