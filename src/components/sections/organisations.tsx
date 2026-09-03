import Image from "next/image";

import { organisations } from "@/lib/site";
import { asset, cn } from "@/lib/utils";

function LogoTile({ org }: { org: (typeof organisations.items)[number] }) {
  const tile = (
    <div
      className={cn(
        "flex h-24 w-40 items-center justify-center rounded-xl border px-5 shadow-xs transition-shadow hover:shadow-md sm:h-28 sm:w-52",
        org.dark ? "border-navy/10 bg-navy/75" : "border-border bg-white"
      )}
    >
      {org.logo ? (
        <Image
          src={asset(org.logo)}
          alt={org.name}
          width={240}
          height={80}
          unoptimized
          className="max-h-14 w-auto max-w-[80%] object-contain sm:max-h-[4.5rem]"
        />
      ) : (
        <span className="text-center text-sm font-semibold leading-snug text-foreground/80">
          {org.name}
        </span>
      )}
    </div>
  );

  return org.url ? (
    <a
      href={org.url}
      target="_blank"
      rel="noreferrer"
      aria-label={org.name}
      className="block rounded-xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      {tile}
    </a>
  ) : (
    tile
  );
}

export function Organisations() {
  return (
    <section
      id="organisations"
      className="scroll-mt-20 overflow-hidden py-20 sm:py-24"
    >
      <h2 className="container-x text-center text-base font-semibold tracking-wider text-muted-foreground uppercase sm:text-lg">
        {organisations.heading}
      </h2>

      {/* Infinite marquee: the list is rendered twice and the track slides by
          exactly half its width, so the loop is seamless. Pauses on hover;
          falls back to a static wrapped grid for prefers-reduced-motion. */}
      <div className="marquee mt-10">
        <ul className="marquee-track">
          {organisations.items.map((org) => (
            <li key={org.name} className="marquee-item">
              <LogoTile org={org} />
            </li>
          ))}
          {organisations.items.map((org) => (
            <li
              key={`${org.name}-dup`}
              className="marquee-item marquee-dup"
              aria-hidden
            >
              <LogoTile org={org} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
