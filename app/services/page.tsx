import type { Metadata } from "next";
import Link from "next/link";
import { company, services } from "@/lib/site-config";
import { CtaLink } from "@/components/cta-link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Five ways FeeSlayers grows the shop: Google presence, advertising, consumer financing, payment processing, and business capital.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Five ways we grow the shop.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-navy-soft">
            Each service line does one job. Together they get the shop
            found, get the phone ringing, get customers to yes, and keep
            the full ticket once the sale is made.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <ul>
            {services.map((service) => (
              <li key={service.slug} className="border-t border-navy/15 py-8">
                <Link
                  href={`/services/${service.slug}`}
                  className="grid gap-2 md:grid-cols-[1fr_1.4fr_auto] md:items-start md:gap-8"
                >
                  <div>
                    <h2 className="text-xl font-medium">{service.name}</h2>
                    <p className="text-navy-soft">{service.promise}</p>
                  </div>
                  <p className="max-w-prose text-navy-soft">{service.detail}</p>
                  <span className="font-medium text-navy underline underline-offset-4">
                    Details
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-deep text-cream">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="max-w-prose text-lg">
            Consumer financing and payment processing also come packaged
            together as{" "}
            <Link href="/ultimate-payment-stack" className="underline underline-offset-4">
              The Ultimate Payment Stack
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <CtaLink href={company.booking}>Book a call</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
