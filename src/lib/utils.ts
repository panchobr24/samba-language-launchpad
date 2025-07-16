import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function trackCtaClick(name: string) {
  if (typeof window !== 'undefined' && (window as any).goatcounter && typeof (window as any).goatcounter.count === 'function') {
    (window as any).goatcounter.count({
      path: `/cta/${name}`,
      title: `Clique CTA: ${name}`
    });
  }
}
