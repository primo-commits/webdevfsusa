import Link from "next/link";
import { company, pricing } from "@/lib/site-config";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/ultimate-payment-stack", label: pricing.public.ultimateStack.name },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="bg-navy text-cream">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {company.name}
        </Link>
        <a
          href={`tel:${company.phone.replace(/\D/g, "")}`}
          className="ml-auto text-sm font-medium"
        >
          {company.phone}
        </a>
        <nav aria-label="Main" className="basis-full md:order-none md:basis-auto md:pl-4">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-cream/85">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
