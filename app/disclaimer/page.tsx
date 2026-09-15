import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Legal Disclaimer | FeeSlayers",
  description: "Important legal disclaimers and disclosures for FeeSlayers services.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-navy text-cream">
      <Navbar theme="dark" />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Page Header */}
          <div className="text-center mb-16">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Disclaimer &amp; Disclosures
            </h1>
            <p className="text-cream/60 text-lg max-w-2xl mx-auto">
              Last updated: September 2026
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">1. Technology Service Provider</h2>
              <p className="text-cream/80 leading-relaxed">
                FeeSlayers provides payment processing technology and merchant services as a technology platform provider. We are not a bank, lending institution, or financial institution. Our role is limited to providing software, hardware integration, and related technology services that facilitate payment processing between merchants and their customers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">2. Not a Lender or Credit Issuer</h2>
              <p className="text-cream/80 leading-relaxed">
                FeeSlayers does not make credit decisions, originate loans, or issue credit. We do not provide financing products. Any financing, lending, or credit services advertised through our platform are provided by independent third-party lenders. FeeSlayers is not responsible for the terms, conditions, or outcomes of any credit products offered by third parties.
              </p>
              <p className="text-cream/80 leading-relaxed mt-4">
                <strong className="text-cream">FeeSlayers is not a lender and does not make credit decisions.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">3. Third-Party Services and Links</h2>
              <p className="text-cream/80 leading-relaxed">
                Our platform may include links, integrations, or references to third-party services including but not limited to payment processors, lenders, financing platforms, and financial institutions. These third parties operate under their own terms, privacy policies, and regulatory obligations. FeeSlayers does not endorse, guarantee, or assume responsibility for the products, practices, or compliance of any third-party provider.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">4. No Financial, Legal, or Compliance Advice</h2>
              <p className="text-cream/80 leading-relaxed">
                The information provided through our website, services, and communications is for general informational purposes only. It does not constitute financial advice, legal advice, tax advice, or professional consulting of any kind. Merchants are solely responsible for ensuring their payment surcharging practices, financing program participation, and related business activities comply with all applicable federal, state, and local laws, regulations, and card network rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">5. Payment Surcharge Compliance</h2>
              <p className="text-cream/80 leading-relaxed">
                Payment surcharging is subject to significant state and federal regulation, including card network rules, consumer protection laws, and state-specific restrictions. Several states prohibit or heavily restrict surcharging. Merchants using our platform agree to review and comply with all applicable laws before implementing any surcharging program. FeeSlayers provides tools and guidance, but the ultimate responsibility for legal compliance rests with the merchant.
              </p>
              <p className="text-cream/80 leading-relaxed mt-4">
                Surcharging is not permitted in the province of Quebec, Canada. FeeSlayers does not market or promote surcharging services to Quebec-based merchants.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">6. Financing and Credit Products</h2>
              <p className="text-cream/80 leading-relaxed">
                Financing products, buy-now-pay-later options, and merchant cash advances referenced or facilitated through our platform are provided directly by third-party lenders. Interest rates, repayment terms, eligibility requirements, and approval decisions are made solely by the respective lender. FeeSlayers does not guarantee approval, favorable terms, or availability of any credit product.
              </p>
              <p className="text-cream/80 leading-relaxed mt-4">
                <strong className="text-cream">FeeSlayers is not a lender and does not make credit decisions.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">7. Limitation of Liability</h2>
              <p className="text-cream/80 leading-relaxed">
                To the fullest extent permitted by applicable law, FeeSlayers and its officers, directors, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of revenue, profits, data, or business opportunities, arising out of or related to the use of our platform, third-party services, or any errors or omissions in the provision of our services.
              </p>
              <p className="text-cream/80 leading-relaxed mt-4">
                In no event shall FeeSlayers&apos; total cumulative liability exceed the greater of (a) the fees paid by the merchant to FeeSlayers in the twelve (12) months preceding the claim, or (b) one hundred United States dollars (US$100).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">8. Merchant Responsibilities</h2>
              <p className="text-cream/80 leading-relaxed">
                Merchants are solely responsible for: (a) ensuring their business practices comply with all applicable laws and regulations; (b) the accuracy and legality of any content or claims made in connection with their use of FeeSlayers&apos; services; (c) maintaining adequate insurance coverage; (d) any transactions processed through their account; and (e) notifying FeeSlayers of any unauthorized use of their account or any security breach.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">9. Card Network Rules</h2>
              <p className="text-cream/80 leading-relaxed">
                All merchants using payment processing services are bound by the rules and requirements of the applicable card networks (Visa, Mastercard, American Express, Discover, etc.). These rules govern acceptable surcharge amounts, disclosure requirements, and prohibited practices. FeeSlayers assumes no responsibility for a merchant&apos;s failure to comply with card network rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">10. Service Availability</h2>
              <p className="text-cream/80 leading-relaxed">
                FeeSlayers does not guarantee uninterrupted or error-free operation of its platform, integrations, or third-party services. Service availability may vary. We reserve the right to modify, suspend, or discontinue any aspect of our service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gold mb-4">11. Contact Information</h2>
              <p className="text-cream/80 leading-relaxed">
                If you have questions about this disclaimer, please contact us:
              </p>
              <div className="mt-4 space-y-2 text-cream/80">
                <p><strong className="text-cream">FeeSlayers</strong></p>
                <p>74 E Glenwood Ave, Unit 5817</p>
                <p>Smyrna, DE 19977</p>
                <p>Email: <a href="mailto:info@feeslayers.com" className="text-gold hover:text-gold/80 underline">info@feeslayers.com</a></p>
                <p>Phone: <a href="tel:+13025205447" className="text-gold hover:text-gold/80 underline">(302) 520-5447</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
