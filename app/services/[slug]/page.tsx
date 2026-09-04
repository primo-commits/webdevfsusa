import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  company,
  services,
  pricing,
  financing,
  businessCapital,
  legal,
} from "@/lib/site-config";
import { CtaLink } from "@/components/cta-link";
import { StatGrid } from "@/components/stat-grid";

type Stat = { label: string; value: string };

const stats: Partial<Record<string, Stat[]>> = {
  "google-presence": [
    { label: "Price", value: pricing.public.googlePresence.price },
  ],
  "consumer-financing": [
    { label: "Lender network", value: financing.lenderNetwork },
    { label: "Loan range", value: financing.loanRange },
    { label: "Decision", value: financing.decision },
    { label: "Funding", value: financing.funding },
  ],
  "business-capital": [
    { label: "Funding range", value: businessCapital.range },
    { label: "Time in business", value: businessCapital.timeInBusiness },
    { label: "Monthly revenue", value: businessCapital.monthlyRevenue },
    { label: "Credit requirement", value: businessCapital.creditRequirement },
    { label: "Funding speed", value: businessCapital.funding },
  ],
};

const legalLines: Partial<Record<string, string[]>> = {
  "consumer-financing": [legal.financingDisclosure, legal.notALender],
  "payment-processing": [legal.cashDiscount],
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.promise,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const serviceStats = stats[service.slug];
  const serviceLegalLines = legalLines[service.slug];

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <p className="text-sm text-navy-soft">
            <Link href="/services" className="underline underline-offset-4">
              Services
            </Link>
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            {service.name}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-navy-soft">
            {service.promise}
          </p>
          <p className="mt-4 max-w-prose text-navy-soft">{service.detail}</p>

          {service.slug === "google-presence" && (
            <p className="mt-4 max-w-prose text-navy-soft">
              {pricing.public.googlePresence.note}
            </p>
          )}

          {service.slug === "advertising" && (
            <p className="mt-4 max-w-prose text-navy-soft">
              Pricing is quoted on a call, based on the campaign.
            </p>
          )}

          {service.slug === "payment-processing" && (
            <p className="mt-4 max-w-prose text-navy-soft">
              Included at 0% cost as part of{" "}
              <Link
                href="/ultimate-payment-stack"
                className="underline underline-offset-4"
              >
                The Ultimate Payment Stack
              </Link>
              , {pricing.public.ultimateStack.price}.
            </p>
          )}

          <div className="mt-8">
            <CtaLink href={company.booking}>Book a call</CtaLink>
          </div>
        </div>
      </section>

      {serviceStats && (
        <section className="bg-cream-dim">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <StatGrid stats={serviceStats} />
          </div>
        </section>
      )}

      {serviceLegalLines && (
        <section className="bg-cream">
          <div className="mx-auto max-w-5xl space-y-2 px-6 py-16">
            {serviceLegalLines.map((line) => (
              <p key={line} className="max-w-prose text-sm text-navy-soft">
                {line}
              </p>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
