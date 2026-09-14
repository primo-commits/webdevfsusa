import Link from "next/link";
import FeeSlayerLogo from "./FeeSlayerLogo";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <FeeSlayerLogo variant="light" className="mb-4" />
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              Built by humans. Sharpened by AI. We help service-based businesses keep more of what they earn.
            </p>
          </div>

          {/* Canada */}
          <div>
            <h4 className="font-semibold text-cream mb-4">FeeSlayer | Canada</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li><Link href="/canada" className="hover:text-gold transition-colors">Payment Surcharging</Link></li>
              <li><Link href="/canada#calculator" className="hover:text-gold transition-colors">Savings Calculator</Link></li>
              <li><Link href="/canada#industries" className="hover:text-gold transition-colors">Industries</Link></li>
              <li><Link href="/canada#financing" className="hover:text-gold transition-colors">Business Financing</Link></li>
            </ul>
          </div>

          {/* US */}
          <div>
            <h4 className="font-semibold text-cream mb-4">FeeSlayers | United States</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li><Link href="/us" className="hover:text-gold transition-colors">The Growth Bundle</Link></li>
              <li><Link href="/us#services" className="hover:text-gold transition-colors">All Services</Link></li>
              <li><Link href="/us#financing" className="hover:text-gold transition-colors">Financing Options</Link></li>
              <li><Link href="/us#capital" className="hover:text-gold transition-colors">Business Capital</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a href="tel:+13025205447" className="hover:text-gold transition-colors">
                  (302) 520-5447
                </a>
              </li>
              <li>
                <a href="mailto:info@feeslayers.com" className="hover:text-gold transition-colors">
                  info@feeslayers.com
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs text-cream/50">US Mailing:</span><br />
                74 E Glenwood Avenue, Unit 5817<br />
                Smyrna, DE 19977
              </li>
            </ul>
          </div>
        </div>

        {/* US Disclaimer */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-xs text-cream/50 leading-relaxed">
            <strong className="text-cream/70">FeeSlayers is not a lender and does not make credit decisions.</strong> Financing provided by third-party lenders. Subject to credit approval. Terms vary by lender.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} FeeSlayer / FeeSlayers. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/50">
            <Link href="/canada#privacy" className="hover:text-cream/80 transition-colors">Privacy Policy</Link>
            <Link href="/canada#terms" className="hover:text-cream/80 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
