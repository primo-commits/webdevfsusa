import { readFile } from "node:fs/promises";
import path from "node:path";

/** Poppins weights for ImageResponse (favicon, OG image). Files in lib/fonts. */
export async function poppins(weight: 600 | 700) {
  const data = await readFile(
    path.join(process.cwd(), "lib", "fonts", `poppins-${weight}.woff`)
  );
  return { name: "Poppins", data, weight, style: "normal" as const };
}
