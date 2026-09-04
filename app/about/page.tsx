import type { Metadata } from "next";
import Link from "next/link";
import { company, audience } from "@/lib/site-config";
import { CtaLink } from "@/components/cta-link";

export const metadata: Metadata = {
  title: "About",
  description:
    "FeeSlayers is a business development company for shop owners and contractors. Not a credit card processor.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Not a card processor.
          </h1>
          <div className="mt-6 max-w-prose space-y-4 text-lg text-navy-soft">
            <p>
              FeeSlayers is a business development company for shop owners and
              contractors. We take on the growth side of the shop: getting it
              found, getting the phone to ring, getting the customer to yes, and
              keeping the money once the sale is made.
            </p>
            <p>
              Payments is one of our five services. It is the last one, not the
              headline. It is there so the margin you earn on a job stays yours.
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
