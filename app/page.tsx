import { company, services, pricing, financing, legal } from "@/lib/site-config";
import { CtaLink } from "@/components/cta-link";
import { StatGrid } from "@/components/stat-grid";

const stack = pricing.public.ultimateStack;
const telHref = `tel:${company.phone.replace(/\D/g, "")}`;

export default function HomePage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Get found, get called, get the yes.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-navy-soft">
            FeeSlayers runs the growth side of your shop: the Google listing,
            the ads, financing for the big jobs. Payments come last, and stay
            out of your margin.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <CtaLink href={company.booking}>Book a call</CtaLink>
            <a href={telHref} className="font-medium text-navy">
              Or call {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <h2 className="text-2xl font-semibold">How we grow the shop</h2>
          <ul className="mt-8">
            {services.map((service) => (
              <li
                key={service.slug}
                className="grid gap-2 border-t border-navy/15 py-6 md:grid-cols-[1fr_1.4fr] md:gap-8"
              >
                <div>
                  <h3 className="text-lg font-medium">{service.name}</h3>
                  <p className="text-navy-soft">{service.promise}</p>
                </div>
                <p className="max-w-prose text-navy-soft">{service.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <span className="inline-block rounded bg-gold px-3 py-1 text-sm font-medium text-navy-deep">
            {stack.price} flat
          </span>
          <h2 className="mt-4 text-3xl font-semibold">{stack.name}</h2>
          <ul className="mt-8 space-y-4">
            {stack.includes.map((item) => (
              <li key={item} className="max-w-prose border-t border-cream/15 pt-4">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CtaLink href={company.booking}>Book a call</CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-cream-dim">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold">
            Financing that gets customers to yes
          </h2>
          <div className="mt-8">
            <StatGrid
              stats={[
                { label: "Lender network", value: financing.lenderNetwork },
                { label: "Loan range", value: financing.loanRange },
                { label: "Decision", value: financing.decision },
                { label: "Funding", value: financing.funding },
              ]}
            />
          </div>
          <p className="mt-10 max-w-prose text-sm text-navy-soft">
            {legal.financingDisclosure} {legal.notALender}
          </p>
        </div>
      </section>
    </>
  );
}
