interface SpecialtyDetailPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export default async function SpecialtyDetailPage({ params }: SpecialtyDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold">{slug}</h1>
      <p className="mt-4 text-slate-600">Specialty detail page coming soon</p>
    </div>
  );
}
