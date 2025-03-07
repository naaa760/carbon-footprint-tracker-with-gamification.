import { Card } from "@/components/ui/Card";

type Badge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  progress?: number;
};

export default function BadgeSection() {
  // This would normally come from a hook or API
  const badges: Badge[] = [
    {
      id: "1",
      name: "Early Bird",
      description: "Start tracking your carbon footprint",
      icon: "🌱",
      earned: true,
    },
    {
      id: "2",
      name: "Cycle Champion",
      description: "Use bicycle 10 times",
      icon: "🚲",
      earned: true,
    },
    {
      id: "3",
      name: "Plant Power",
      description: "Choose plant-based meals 5 times",
      icon: "🥗",
      earned: false,
      progress: 60,
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Badges</h2>
      <div className="space-y-4">
        {badges.map((badge) => (
          <BadgeItem key={badge.id} badge={badge} />
        ))}
      </div>
    </Card>
  );
}

function BadgeItem({ badge }: { badge: Badge }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl
          ${
            badge.earned
              ? "bg-green-100"
              : "bg-gray-100 text-gray-400 grayscale opacity-50"
          }`}
      >
        {badge.icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{badge.name}</h3>
        <p className="text-sm text-gray-600">{badge.description}</p>
        {!badge.earned && badge.progress && (
          <div className="mt-1 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 rounded-full"
              style={{ width: `${badge.progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
