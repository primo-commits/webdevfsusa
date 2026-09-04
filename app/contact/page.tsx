import type { Metadata } from "next";
import { company } from "@/lib/site-config";
import { CtaLink } from "@/components/cta-link";
import { ContactForm } from "@/components/contact-form";

const telHref = `tel:${company.phone.replace(/\D/g, "")}`;
const { street, city, state, zip } = company.address;

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a call, or call ${company.phone}. FeeSlayers works with shops across the United States.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            Talk to us.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-navy-soft">
            Pick a time that works, or call. We will look at your shop and tell
            you which of the five services makes sense first.
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
        <div className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Or send a note</h2>
            <p className="mt-2 max-w-prose text-navy-soft">
              Leave your number and we will call you back.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6 text-navy-soft">
            <div>
              <h2 className="text-sm font-medium text-navy">Phone</h2>
              <a href={telHref} className="mt-1 block">
                {company.phone}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-medium text-navy">Email</h2>
              <a href={`mailto:${company.email}`} className="mt-1 block">
                {company.email}
              </a>
            </div>
            <div>
              <h2 className="text-sm font-medium text-navy">Mail</h2>
              <p className="mt-1">
                {company.legalName}
                <br />
                {street}
                <br />
                {city}, {state} {zip}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
