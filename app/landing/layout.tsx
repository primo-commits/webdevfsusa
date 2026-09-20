import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FeeSlayers -- 2 Weeks Free Facebook Ad Management',
  description:
    "See if FeeSlayers is the right fit for your business. We'll run your Facebook ads for 2 weeks at no cost. If you don't see results, you walk away.",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
