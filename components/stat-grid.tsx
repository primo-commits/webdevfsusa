type Stat = { label: string; value: string };

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid gap-8 sm:grid-cols-2">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-sm text-navy-soft">{stat.label}</dt>
          <dd className="text-xl font-medium">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
