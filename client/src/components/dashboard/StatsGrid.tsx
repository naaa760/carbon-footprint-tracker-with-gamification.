"use client";

import { Card } from "@/components/ui/Card";
import { useStats } from "@/hooks/useStats";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function StatsGrid() {
  const { stats, isLoading, error } = useStats();

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-24 bg-gray-200 rounded-lg" />
          ))}
        </div>
      </Card>
    );
  }

  if (!stats) {
    return (
      <Card className="p-6">
        <p className="text-gray-600">No statistics available.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total CO₂</p>
          <p className="text-2xl font-bold text-gray-900">
            {stats.total.toFixed(1)} kg
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Daily Average</p>
          <p className="text-2xl font-bold text-gray-900">
            {stats.average.toFixed(1)} kg
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Trend</p>
          <p
            className={`text-2xl font-bold ${
              stats.trend < 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {stats.trend > 0 ? "+" : ""}
            {stats.trend.toFixed(1)}%
          </p>
        </div>
      </div>
    </Card>
  );
}
