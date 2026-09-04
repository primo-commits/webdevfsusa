import type { MetadataRoute } from "next";
import { company, services } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const staticPaths = [
    "",
    "/services",
    "/ultimate-payment-stack",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const servicePaths = services.map((s) => `/services/${s.slug}`);

  return [...staticPaths, ...servicePaths].map((p) => ({
    url: `${base}${p}`,
  }));
}
