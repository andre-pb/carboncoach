import Image from "next/image";
import Link from "next/link";

import { footer, nav, siteConfig } from "@/lib/site";
import { asset } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={asset("/images/logo-mark.png")}
              alt=""
              width={398}
              height={400}
              className="size-12"
            />
            <span className="text-lg font-semibold text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="max-w-xs text-sm text-white/70">{siteConfig.strapline}</p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wider text-amber uppercase">
            Menu
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold tracking-wider text-amber uppercase">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Book a 20-minute call
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/50">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
