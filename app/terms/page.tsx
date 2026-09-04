import type { Metadata } from "next";
import { company, legal } from "@/lib/site-config";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `The terms that apply when you use the ${company.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      intro={`These terms apply to ${company.url.replace("https://", "")}, run by ${company.legalName} By using the site you agree to them. If you sign up for a service, a separate agreement will cover that service and will take priority over these terms where they differ.`}
      sections={[
        {
          heading: "What this site is for",
          body: [
            `The site describes the services ${company.name} offers to businesses in the ${company.market} and gives you a way to contact us or book a call. It is general information, not advice for your specific situation, and nothing on it is an offer that binds either of us until we both sign a service agreement.`,
          ],
        },
        {
          heading: "Financing and capital",
          body: [
            legal.financingDisclosure,
            legal.notALender,
            "Any figures on the site about lenders, loan amounts, decision times or funding times describe what our lender network offers in general. They are not a promise about any particular application.",
          ],
        },
        {
          heading: "Payment processing",
          body: [
            legal.cashDiscount,
            "Payment processing services are provided under a separate merchant agreement with the processing partner. That agreement, not these terms, governs processing.",
          ],
        },
        {
          heading: "Results",
          body: [
            "Every shop is different. We do not guarantee a particular number of leads, calls, reviews, approvals or sales from any service.",
          ],
        },
        {
          heading: "Using the site",
          body: [
            "Do not use the site to send spam, to submit false information, to probe or disrupt it, or to do anything unlawful. We may block access if you do.",
            `The text, design and logos on the site belong to ${company.legalName} or are used with permission. You may read and share links to the site, but do not copy or reuse its content commercially without our written consent.`,
          ],
        },
        {
          heading: "Links to other sites",
          body: [
            "The site links to tools we use, such as our booking page, and may link to lenders and partners. We do not control those sites and are not responsible for their content or their terms.",
          ],
        },
        {
          heading: "Limits on liability",
          body: [
            `The site is provided as is. To the fullest extent the law allows, ${company.legalName} is not liable for any indirect, incidental or consequential loss arising from your use of the site or your reliance on anything on it. Nothing in these terms limits liability that cannot be limited by law.`,
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of the State of Delaware, without regard to its conflict of law rules. Any dispute about the site will be heard in the state or federal courts located in Delaware.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "We may update these terms from time to time. The version posted here is the one that applies.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `${company.legalName}, ${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}. ${company.email} or ${company.phone}.`,
          ],
        },
      ]}
    />
  );
}
