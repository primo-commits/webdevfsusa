import Link from "next/link";
import { company, legal } from "@/lib/site-config";
import { Wordmark } from "@/components/wordmark";

const links = [
  { href: "/services", label: "Services" },
  { href: "/ultimate-payment-stack", label: "The Ultimate Payment Stack" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms of use" },
];

export function SiteFooter() {
  const { street, city, state, zip } = company.address;

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-5xl space-y-3 px-6 py-10 text-sm">
        <p className="text-lg">
          <Wordmark onDark />
        </p>
        <p className="font-medium">{company.legalName}</p>
        <p>
          {street}, {city}, {state} {zip}
        </p>
        <p>
          <a href={`tel:${company.phone.replace(/\D/g, "")}`}>{company.phone}</a>
          {" · "}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-cream/85">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="max-w-prose pt-3 text-cream/70">{legal.financingDisclosure}</p>
        <p className="max-w-prose text-cream/70">{legal.notALender}</p>
      </div>
    </footer>
  );
}
