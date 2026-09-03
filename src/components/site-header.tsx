"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { nav, siteConfig } from "@/lib/site";
import { asset, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        scrolled
          ? "border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-background"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src={asset("/images/logo.png")}
            alt={siteConfig.name}
            width={900}
            height={362}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-teal"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="accent">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Image
                src={asset("/images/logo.png")}
                alt={siteConfig.name}
                width={900}
                height={362}
                className="mr-10 h-10 w-auto"
              />
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-medium hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                variant="accent"
                size="lg"
                className="mt-4"
                onClick={() => setOpen(false)}
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
