import { legal } from "@/lib/site-config";

type Section = { heading: string; body: string[] };

type Props = {
  title: string;
  intro: string;
  sections: Section[];
};

/** Shared layout for the privacy policy and terms pages. */
export function LegalPage({ title, intro, sections }: Props) {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-prose text-lg text-navy-soft">{intro}</p>
          <p className="mt-4 text-sm text-navy-soft">Effective {legal.effectiveDate}.</p>
        </div>
      </section>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 pb-20">
          {sections.map((section) => (
            <div key={section.heading} className="border-t border-navy/15 py-8">
              <h2 className="text-xl font-medium">{section.heading}</h2>
              <div className="mt-3 max-w-prose space-y-3 text-navy-soft">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
