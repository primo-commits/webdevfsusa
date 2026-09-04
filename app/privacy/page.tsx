import type { Metadata } from "next";
import { company } from "@/lib/site-config";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${company.legalName} collects, uses and protects the information you share on this site.`,
};

const contact = `${company.email} or ${company.phone}`;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro={`This policy explains what ${company.legalName} collects when you use ${company.url.replace("https://", "")}, what we do with it, and the choices you have. We serve businesses in the ${company.market} only.`}
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you send us a note through the contact form, we collect your name and phone number, and anything else you choose to add, such as your email, your shop's name and a message.",
            "When you book a call, the scheduling page collects the details it asks for so we can hold the time and reach you.",
            "Like most websites, our servers record basic technical information such as your IP address, browser type and the pages you visit. We use this to keep the site running and secure.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "To call or email you back about the services you asked about.",
            "To set up and deliver a service you have agreed to.",
            "To keep the site working, prevent abuse and understand which pages are useful.",
            "We do not sell your personal information.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "Service providers that help us run the site, schedule calls and keep in touch with you, such as our customer relationship and scheduling tools. They may only use your information to do that work for us.",
            "Lenders and financing partners, but only when you ask us to set up consumer financing or business capital, and only what is needed to do that. Each lender has its own privacy policy that governs what it does with your information.",
            "Anyone we are required to share it with by law, or to protect our rights, our customers or the public.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We keep your information for as long as we need it to respond to you, deliver a service you have agreed to, and meet our legal and accounting obligations. After that we delete it or make it anonymous.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Reach us at ${contact}. We will respond within a reasonable time and may need to confirm your identity first.`,
            "You can ask us to stop contacting you at any time by replying to any message we send or by calling us.",
          ],
        },
        {
          heading: "Cookies and tracking",
          body: [
            "The site itself does not set marketing or advertising cookies. The booking page and other tools we link to may set their own cookies, which are governed by their policies.",
          ],
        },
        {
          heading: "Children",
          body: [
            "This site is for business owners. We do not knowingly collect information from anyone under 18.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "If we change this policy, we will post the new version here. Material changes will be flagged on this page.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `${company.legalName}, ${company.address.street}, ${company.address.city}, ${company.address.state} ${company.address.zip}. ${contact}.`,
          ],
        },
      ]}
    />
  );
}
