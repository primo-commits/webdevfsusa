import Link from "next/link";
import { company } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="bg-navy text-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {company.name}
        </Link>
        <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="text-sm">
          {company.phone}
        </a>
      </div>
    </header>
  );
}
