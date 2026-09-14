import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar theme="dark" />
      <main className="flex-1 pt-16 lg:pt-20">
        <section className="section-navy py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-cream mb-3">
              Privacy Policy
            </h1>
            <p className="text-cream/40 text-sm mb-12">Last updated: April 2026</p>

            <div className="space-y-8 text-cream/70 text-base leading-relaxed">

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">1. Who we are</h2>
                <p>FeeSlayers is a growth services company operating across the United States and Canada. In the US we are located at 74 E Glenwood Ave Unit 5817, Smyrna DE 19977. You can reach us at info@feeslayers.com or (302) 520-5447.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">2. What information we collect</h2>
                <p className="mb-3">We collect information you provide directly, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information such as your name, email address, phone number, and business name when you fill out a form, book a call, or email us.</li>
                  <li>Business information such as your industry, company size, and current marketing setup when you apply for or use our services.</li>
                  <li>Communication content including the content of your messages and booking details when you interact with our team.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">3. How we use your information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, operate, and support the services you have requested, including Google presence optimization, payment processing setup, financing referrals, and advertising management.</li>
                  <li>Communicate with you about your account, our services, and responses to your inquiries.</li>
                  <li>Comply with our legal obligations and protect our rights and the rights of others.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">4. Third-party sharing</h2>
                <p className="mb-3">We share your information with the following categories of third parties, solely as needed to deliver our services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Advertising platforms.</strong> If you enroll in our Facebook or Meta advertising service, we share your business name and campaign goals with Meta&apos;s advertising platform to set up and manage your ad account.</li>
                  <li><strong>Payment processors.</strong> When you sign up for payment processing or cash discount services, we share relevant business information with our processing partners to set up your account.</li>
                  <li><strong>Financing partners.</strong> If you or your customers apply for consumer or business financing, we share the minimum required application information with our lending network to facilitate lender evaluations. FeeSlayers does not make credit decisions.</li>
                  <li><strong>Hardware providers.</strong> If you enroll in our Clover hardware program, we share your business information with Clover to activate your terminal.</li>
                  <li><strong>Business address and phone service.</strong> If you enroll in our virtual business address or phone service, your information is shared with our third-party provider to provision those services.</li>
                  <li><strong>Legal compliance.</strong> We may disclose information if required by law, court order, or government request.</li>
                </ul>
                <p className="mt-3">We do not sell your personal information to third parties.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">5. Data retention</h2>
                <p>We retain your personal information for as long as your account is active or as needed to provide you services. We also retain information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">6. Cookies and tracking</h2>
                <p>Our website may use cookies and similar technologies to operate and improve our site. We do not use advertising or analytics tracking cookies. If we add such tracking in the future, we will update this policy and obtain consent as required by applicable law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">7. Data security</h2>
                <p>We use commercially reasonable administrative, technical, and physical safeguards to protect your personal information against unauthorized access, use, or disclosure. No method of internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">8. Your rights</h2>
                <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of your personal information, subject to our legal retention obligations.</li>
                  <li>Opt out of certain uses or disclosures of your information.</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, email us at info@feeslayers.com. We will respond within the time period required by applicable law.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">9. Children&apos;s privacy</h2>
                <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">10. Changes to this policy</h2>
                <p>We may update this Privacy Policy from time to time. If we make material changes, we will post the updated policy on this page and update the &quot;Last updated&quot; date. Your continued use of our services after any change constitutes your acceptance of the updated policy.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gold mb-3">11. Contact</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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
