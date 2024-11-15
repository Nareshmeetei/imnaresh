export default function Stats() {
  const stats = [
    { value: '40%+', label: 'Increase in Online Visibility' },
    { value: '2-3x', label: 'Social Media Engagement' },
    { value: '25%+', label: 'Revenue Growth' },
  ];

  return (
    <div className="bg-primary/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}