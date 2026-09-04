import type { Metadata } from "next";
import Link from "next/link";
import { company, audience, partners } from "@/lib/site-config";
import { CtaLink } from "@/components/cta-link";
import { PartnerLogos } from "@/components/partner-logos";

export const metadata: Metadata = {
  title: "About",
  description:
    "More than payments. Built for growth. FeeSlayers helps businesses solve the problems that stand between them and their next customer, their next sale, and their next stage of growth.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            More than payments. Built for growth.
          </h1>
          <div className="mt-6 max-w-prose space-y-4 text-lg text-navy-soft">
            <p>
              FeeSlayers helps businesses solve the problems that stand between
              them and their next customer, their next sale, and their next
              stage of growth.
            </p>
            <p>
              From getting found on Google and generating new leads, to helping
              customers afford larger purchases, accessing capital for your
              business, and keeping more of every transaction, we bring the
              pieces together under one roof.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-dim">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Who we work with</h2>
          <ul className="mt-6 grid gap-2 text-navy-soft sm:grid-cols-2">
            {[...audience.primary, ...audience.secondary].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-prose text-navy-soft">
            Owner-operators, not enterprises. Across the {company.market}.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-semibold">Who we work with behind the scenes</h2>
          <p className="mt-4 max-w-prose text-navy-soft">
            Consumer financing runs through {partners.consumerFinancing}. Business
            capital runs through {partners.businessCapital}. Payment processing runs
            through {partners.paymentProcessing}. We chose each one, we set up the
            account, and we stay on it with you.
          </p>
          <div className="mt-8">
            <PartnerLogos />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 pb-16">
          <p className="max-w-prose text-navy-soft">
            {company.legalName} is based in {company.address.city},{" "}
            {company.address.state}. See{" "}
            <Link href="/services" className="underline underline-offset-4">
              what we do
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="underline underline-offset-4">
              get in touch
            </Link>
            .
          </p>
          <div className="mt-8">
            <CtaLink href={company.booking}>Book a call</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
