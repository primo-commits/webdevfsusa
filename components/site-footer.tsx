import { company, legal } from "@/lib/site-config";

export function SiteFooter() {
  const { street, city, state, zip } = company.address;

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-5xl space-y-3 px-6 py-10 text-sm">
        <p className="font-medium">{company.legalName}</p>
        <p>
          {street}, {city}, {state} {zip}
        </p>
        <p>
          <a href={`tel:${company.phone.replace(/\D/g, "")}`}>{company.phone}</a>
          {" \u00b7 "}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
        <p className="max-w-prose text-cream/70">{legal.financingDisclosure}</p>
        <p className="max-w-prose text-cream/70">{legal.notALender}</p>
      </div>
    </footer>
  );
}
