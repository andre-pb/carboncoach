"use client";

import * as React from "react";
import { SendIcon } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * No backend yet — the form composes a mailto: link so the visitor's own
 * email client sends the message. Swap handleSubmit for a server action /
 * form service (Formspree, Resend, etc.) when a mailbox is set up.
 */
export function ContactForm() {
  const formRef = React.useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Website enquiry from ${name || "the Carbon Coach website"}`;
    const body = [
      message,
      "",
      "—",
      `Name: ${name}`,
      `Email: ${email}`,
      organisation ? `Organisation: ${organisation}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border bg-background p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="organisation">Organisation</Label>
        <Input id="organisation" name="organisation" autoComplete="organization" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" size="lg" className="sm:w-fit">
        <SendIcon />
        Send message
      </Button>
    </form>
  );
}
