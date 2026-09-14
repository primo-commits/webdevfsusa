import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar theme="dark" />
      <main className="flex-1 pt-16 lg:pt-20">
        <section className="section-navy py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream mb-3">
              Terms of Service
            </h1>
            <p className="text-cream/40 text-sm mb-12">Last updated: April 2026</p>

            <div className="space-y-8 text-cream/70 text-base leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">1. Agreement to terms</h2>
                <p>By accessing or using the FeeSlayers website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services. These terms apply to all visitors, users, and clients who access feeslayers.com or enroll in any FeeSlayers service.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">2. Who we are</h2>
                <p>FeeSlayers is a growth services company. In the US: FeeSlayers, 74 E Glenwood Ave Unit 5817, Smyrna DE 19977. Phone: (302) 520-5447. Email: info@feeslayers.com. In Canada: FeeSlayer, operating in provinces where payment surcharging is permitted by law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">3. Our services</h2>
                <p className="mb-3">FeeSlayers provides a bundle of growth and payment services for service-based businesses. The specific services available to you depend on your jurisdiction and the plan you enroll in.</p>
                <p className="mb-3"><strong>US services</strong> may include Google Business Profile optimization, Facebook and Meta advertising management, consumer financing referrals, business capital referrals, payment processing and cash discount program setup, Clover hardware provisioning, and virtual business address and phone services. Specific services are described on feeslayers.com and confirmed in your service agreement.</p>
                <p><strong>Canadian services</strong> may include payment surcharging setup, Google Business Profile optimization, Facebook and Meta advertising management, and other growth services as described on feeslayer.ca. Payment surcharging services are not available in Quebec.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">4. Service fees and billing</h2>
                <p className="mb-3"><strong>US bundle.</strong> The standard monthly fee is $99 per month, billed monthly in advance. This covers the bundle components described at signup. Advertising spend is billed separately; you pay the actual ad platform costs and FeeSlayers does not mark up the ad budget. Specific bundle components and any quoted pricing are confirmed in your service agreement.</p>
                <p className="mb-3"><strong>Canadian services.</strong> Pricing varies by service and is described at signup or in your service agreement.</p>
                <p><strong>Financing and capital.</strong> FeeSlayers is not a lender and does not make credit decisions. Financing products are provided by third-party lenders. Any financing terms, interest rates, fees, and repayment schedules are set by the lending partner, not FeeSlayers. FeeSlayers may receive compensation from financing partners, which will be disclosed where required by applicable law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">5. Advertising services</h2>
                <p className="mb-3">If you enroll in our Facebook or Meta advertising management service:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You authorize FeeSlayers to create and manage a Meta ad account and campaigns on your behalf.</li>
                  <li>You are responsible for approving ad creative and targeting parameters before campaigns launch. FeeSlayers will not publish ads without your explicit approval unless a prior approval framework is documented in your service agreement.</li>
                  <li>You pay all advertising platform costs directly. FeeSlayers&apos;s management fee is separate from ad spend.</li>
                  <li>FeeSlayers does not guarantee a specific number of leads, conversions, or revenue results.</li>
                  <li>Results depend on your offer, market, targeting, creative quality, and other factors outside FeeSlayers&apos;s control.</li>
                  <li>Campaign performance reports are available upon request.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">6. Financing referrals</h2>
                <p className="mb-3">FeeSlayers facilitates introductions to consumer and business financing partners. Specifically:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>FeeSlayers is not a lender, broker, or credit intermediary and does not make credit decisions, offer loans, or determine financing terms.</li>
                  <li>All financing decisions are made solely by the third-party lenders in their sole discretion.</li>
                  <li>FeeSlayers does not warrant, guarantee, or assure approval for any financing application.</li>
                  <li>Financing terms, interest rates, fees, and eligibility criteria are set by the lending partners and may change without notice.</li>
                  <li>Funding timelines are estimates and not guarantees.</li>
                </ul>
                <p className="mt-3">FeeSlayers is not a lender and does not make credit decisions. Consumer and business financing provided by third-party lenders.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">7. Payment processing</h2>
                <p className="mb-3">If you enroll in our payment processing or cash discount program:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The cash discount program is set up through MiCamp Solutions. FeeSlayers is not the payment processor; MiCamp is the processor of record.</li>
                  <li>FeeSlayers does not control, guarantee, or warrant MiCamp&apos;s services, fees, uptime, or customer support.</li>
                  <li>You are responsible for reviewing and agreeing to MiCamp&apos;s separate terms of service and privacy policy.</li>
                  <li>Compliance with card network rules and applicable payment regulations is your responsibility.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">8. Clover hardware</h2>
                <p>When you enroll in our Clover hardware program, your Clover equipment and related services are provided directly by Clover and its partners. FeeSlayers facilitates the enrollment and initial setup. Clover&apos;s separate terms of service, hardware agreement, and privacy policy govern your use of the hardware. FeeSlayers does not own, operate, or warrant the Clover hardware.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">9. Client responsibilities</h2>
                <p className="mb-3">When you enroll in FeeSlayers services, you are responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing accurate and complete information about your business.</li>
                  <li>Reviewing and approving any advertising creative, campaigns, or content before publication.</li>
                  <li>Ensuring your products, services, and marketing comply with applicable laws and regulations in your jurisdiction.</li>
                  <li>Paying all fees, platform costs, and charges on time.</li>
                  <li>Complying with the terms of service of any third-party platforms or providers included in your service bundle.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">10. Cancellation</h2>
                <p className="mb-3">You may cancel your FeeSlayers services at any time by notifying us in writing at info@feeslayers.com or by calling (302) 520-5447.</p>
                <p className="mb-3">Upon cancellation:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Monthly billing stops at the end of your current billing period.</li>
                  <li>Active advertising campaigns will be paused within 2 business days of receiving your cancellation notice unless you request otherwise.</li>
                  <li>Third-party services such as Clover hardware, payment processing, and financing integrations are governed by the separate agreements with those providers. Cancellation with those providers is your responsibility.</li>
                  <li>Any setup fees or non-refundable charges are not refunded on a pro-rata basis unless your service agreement states otherwise.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">11. Limitation of liability</h2>
                <p className="mb-3">To the fullest extent permitted by applicable law:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>FeeSlayers&apos;s total liability for any claim arising from or related to our services shall not exceed the total amount of fees you have paid to FeeSlayers in the 3 months preceding the claim.</li>
                  <li>FeeSlayers shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to lost profits, lost revenue, lost savings, or business interruption, even if we have been advised of the possibility of such damages.</li>
                  <li>FeeSlayers is not liable for the acts, omissions, errors, or representations of any third-party provider, including Meta, Clover, MiCamp Solutions, financing partners, or lending networks.</li>
                  <li>FeeSlayers is not liable for any results, leads, sales, or revenue outcomes from advertising or any other service.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">12. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless FeeSlayers and its officers, directors, employees, and agents from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising from or related to: (a) your use of our services; (b) your violation of these Terms of Service; (c) your violation of any third-party rights; or (d) your business activities, products, services, or marketing that violate applicable law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">13. Disclaimer of warranties</h2>
                <p>Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that our services will be uninterrupted, error-free, or completely secure. We do not warrant specific advertising results, financing approvals, or any particular business outcome.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">14. Intellectual property</h2>
                <p className="mb-3">FeeSlayers retains all right, title, and interest in and to our brand, logos, website content, process documentation, and any tools or frameworks we develop. You retain all right, title, and interest in your brand, logos, creative assets you provide, and your business data.</p>
                <p>When you enroll in our advertising services, you grant FeeSlayers a limited, non-exclusive license to use your logos, images, and content solely for the purpose of providing the agreed-upon advertising services.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">15. Governing law and jurisdiction</h2>
                <p className="mb-3">These Terms of Service are governed by and construed in accordance with the laws of the State of Delaware, USA, without regard to its conflict of law provisions.</p>
                <p>For US clients: any dispute arising from these terms shall be resolved exclusively in the state or federal courts located in Delaware, and you hereby consent to the personal jurisdiction of those courts.</p>
                <p className="mt-3">For Canadian clients: these terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Disputes shall be resolved in the courts of Ontario.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">16. Changes to these terms</h2>
                <p>We may update these Terms of Service from time to time. If we make material changes, we will post the updated terms on this page and update the &quot;Last updated&quot; date. Your continued use of our services after any change constitutes your acceptance of the updated terms. We encourage you to review this page periodically.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">17. Severability</h2>
                <p>If any provision of these Terms of Service is held to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it valid and enforceable, or if modification is not possible, that provision shall be severed from these terms. The remaining provisions shall continue in full force and effect.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">18. Contact</h2>
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="mt-3 bg-navy-soft rounded-xl p-5 border border-white/5 space-y-1 text-sm">
                  <p className="text-cream font-semibold">FeeSlayers</p>
                  <p className="text-cream/60">74 E Glenwood Ave Unit 5817</p>
                  <p className="text-cream/60">Smyrna DE 19977</p>
                  <p className="text-cream/60">info@feeslayers.com</p>
                  <p className="text-cream/60">(302) 520-5447</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
