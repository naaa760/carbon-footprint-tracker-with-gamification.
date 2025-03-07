import { Card } from "@/components/ui/Card";

type Activity = {
  id: string;
  type: string;
  description: string;
  impact: number;
  date: string;
  category: "transport" | "food" | "energy" | "other";
};

export default function ActivityFeed() {
  // This would normally come from a hook or API
  const activities: Activity[] = [
    {
      id: "1",
      type: "Transport",
      description: "Cycled to work",
      impact: -2.5,
      date: "2024-03-20",
      category: "transport",
    },
    {
      id: "2",
      type: "Food",
      description: "Chose plant-based meal",
      impact: -3.2,
      date: "2024-03-20",
      category: "food",
    },
    {
      id: "3",
      type: "Energy",
      description: "Used air conditioning",
      impact: 1.8,
      date: "2024-03-19",
      category: "energy",
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </Card>
  );
}

function ActivityItem({ activity }: { activity: Activity }) {
  const categoryIcons = {
    transport: "🚲",
    food: "🥗",
    energy: "⚡",
    other: "📝",
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
      <div className="text-2xl">{categoryIcons[activity.category]}</div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{activity.type}</h3>
        <p className="text-sm text-gray-600">{activity.description}</p>
      </div>
      <div className="text-right">
        <p
          className={`font-medium ${
            activity.impact < 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {activity.impact < 0 ? "-" : "+"}
          {Math.abs(activity.impact)} kg CO₂
        </p>
        <p className="text-sm text-gray-500">{formatDate(activity.date)}</p>
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}
