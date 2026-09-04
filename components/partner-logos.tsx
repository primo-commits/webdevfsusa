import Image from "next/image";
import { partners } from "@/lib/site-config";
import micamp from "@/public/partners/micamp.png";
import cashbuoy from "@/public/partners/cashbuoy.png";
import flexxbuy from "@/public/partners/flexxbuy.png";

/**
 * Each logo sits on the ground it was drawn for: MiCamp and Flexxbuy are dark
 * marks for light backgrounds, Cashbuoy is a light mark for dark backgrounds.
 */
const logos = [
  { src: flexxbuy, name: partners.consumerFinancing, role: "Consumer financing", dark: false },
  { src: cashbuoy, name: partners.businessCapital, role: "Business capital", dark: true },
  { src: micamp, name: partners.paymentProcessing, role: "Payment processing", dark: false },
];

export function PartnerLogos() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {logos.map((logo) => (
        <li key={logo.name} className="flex flex-col gap-3">
          <div
            className={`flex h-28 items-center justify-center rounded border px-8 ${
              logo.dark ? "border-navy bg-navy" : "border-cream-dim bg-white"
            }`}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              className="h-auto max-h-14 w-auto max-w-full"
              sizes="(min-width: 640px) 300px, 90vw"
            />
          </div>
          <div className="text-sm">
            <p className="font-medium">{logo.name}</p>
            <p className="text-navy-soft">{logo.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
