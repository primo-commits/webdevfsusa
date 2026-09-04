import type { Metadata } from "next";
import Link from "next/link";
import { company, pricing, financing, legal } from "@/lib/site-config";
import { CtaLink } from "@/components/cta-link";
import { StatGrid } from "@/components/stat-grid";

const stack = pricing.public.ultimateStack;
const telHref = `tel:${company.phone.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: stack.name,
  description: `${stack.name}, ${stack.price} flat: consumer financing, 0% cost processing, and a Clover Flex terminal with no lease.`,
};

const parts = [
  {
    body: "A lender network behind every estimate, so the big repair gets approved instead of declined. The lender carries the default risk, not the shop.",
    href: "/services/consumer-financing",
  },
  {
    body: "A compliant cash discount program, so processing costs stop coming out of the margin. You keep the full ticket.",
    href: "/services/payment-processing",
  },
  {
    body: "The terminal is placed at no charge. There is no lease to sign.",
    href: null,
  },
];

export default function UltimatePaymentStackPage() {
  return (
    <>
      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-sm text-cream/70">One flat price</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            {stack.name}
          </h1>
          <p className="mt-6 inline-block rounded bg-gold px-4 py-2 text-2xl font-semibold text-navy-deep">
            {stack.price}
          </p>
          <p className="mt-6 max-w-prose text-lg text-cream/85">
            Three things every shop needs to close the big job and keep the
            money: financing for the customer, processing that costs the shop
            nothing, and a terminal to run it on.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <CtaLink href={company.booking}>Book a call</CtaLink>
            <a href={telHref} className="font-medium text-cream">
              Or call {company.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold">What is in the stack</h2>
          <ul className="mt-8">
            {stack.includes.map((item, i) => {
              const part = parts[i];
              return (
                <li
                  key={item}
                  className="grid gap-2 border-t border-navy/15 py-8 md:grid-cols-[1fr_1.4fr] md:gap-8"
                >
                  <h3 className="text-xl font-medium">{item}</h3>
                  <div>
                    <p className="max-w-prose text-navy-soft">{part.body}</p>
                    {part.href && (
                      <p className="mt-3">
                        <Link
                          href={part.href}
                          className="font-medium text-navy underline underline-offset-4"
                        >
                          Details
                        </Link>
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-cream-dim">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold">The financing side</h2>
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
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="max-w-prose text-navy-soft">
            Google presence and advertising are not part of the stack. They are
            quoted separately. See{" "}
            <Link href="/services" className="underline underline-offset-4">
              all services
            </Link>
            .
          </p>
          <div className="mt-8">
            <CtaLink href={company.booking}>Book a call</CtaLink>
          </div>
          <div className="mt-12 space-y-2">
            <p className="max-w-prose text-sm text-navy-soft">
              {legal.financingDisclosure}
            </p>
            <p className="max-w-prose text-sm text-navy-soft">{legal.notALender}</p>
            <p className="max-w-prose text-sm text-navy-soft">{legal.cashDiscount}</p>
          </div>
        </div>
      </section>
    </>
  );
}
