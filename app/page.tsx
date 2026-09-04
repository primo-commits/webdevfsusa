import { company, services } from "@/lib/site-config";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm text-navy-soft">
        Scaffold only. Build this page from docs/BRAND_BIBLE.md.
      </p>
      <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
        {company.name}
      </h1>
      <ul className="mt-10 space-y-4">
        {services.map((service) => (
          <li key={service.slug} className="border-t border-navy/15 pt-4">
            <h2 className="text-lg font-medium">{service.name}</h2>
            <p className="max-w-prose text-navy-soft">{service.promise}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
