import { Metadata } from 'next';
import { industries } from '@/lib/industries';
import IndustryPageClient from '@/components/IndustryPageClient';

type IndustryKey = typeof industries[number]['id'];

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return Object.keys(industries).map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const industryData = industries.find((i) => i.id === industry);

  if (!industryData) {
    return { title: 'Industry Not Found' };
  }

  return {
    title: `${industryData.name} | FeeSlayer Canada`,
    description: industryData.tagline,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry } = await params;
  const industryData = industries.find((i) => i.id === industry);

  if (!industryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry not found</h1>
          <a href="/canada" className="text-amber-500 hover:text-amber-400">
            ← Back to Canada
          </a>
        </div>
      </div>
    );
  }

  return <IndustryPageClient industry={industryData.id as IndustryKey} />;
}
