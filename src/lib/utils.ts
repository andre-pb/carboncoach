import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a /public asset path with the deploy base path.
 * With `images.unoptimized` (required for static export) next/image does not
 * add `basePath` to `src` itself, so anything under /public must go through
 * this helper. NEXT_PUBLIC_BASE_PATH is inlined at build time.
 */
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
