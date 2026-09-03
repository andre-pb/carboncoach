import { AwardIcon, CompassIcon, UsersIcon } from "lucide-react";

import { services } from "@/lib/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const icons = {
  award: AwardIcon,
  users: UsersIcon,
  compass: CompassIcon,
} as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading title={services.heading} />
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>{services.intro}</p>
            <p className="font-medium text-foreground">{services.audience}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Card
                key={item.title}
                className="group relative gap-4 overflow-hidden border-border/80 pt-8 transition-shadow hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal via-green to-amber"
                />
                <CardHeader>
                  <div className="mb-3 inline-flex size-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.body}
                  </CardDescription>
                </CardHeader>
                {item.detail && (
                  <CardContent className="mt-auto">
                    <p className="border-t pt-4 text-sm leading-relaxed text-foreground/80">
                      {item.detail}
                    </p>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
