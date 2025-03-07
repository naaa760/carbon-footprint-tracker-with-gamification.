"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { ACTIVITY_CATEGORIES } from "@/config/activities";
import type { CarbonActivity } from "@/types/carbon";

type ActivityListProps = {
  activities: CarbonActivity[];
  showFilters?: boolean;
};

export default function ActivityList({
  activities,
  showFilters = false,
}: ActivityListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredActivities =
    selectedCategory === "all"
      ? activities
      : activities.filter((activity) => activity.category === selectedCategory);

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recent Activities</h2>
        {showFilters && (
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="all">All Categories</option>
            {Object.entries(ACTIVITY_CATEGORIES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="space-y-4">
        {filteredActivities.length === 0 ? (
          <EmptyState />
        ) : (
          filteredActivities.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))
        )}
      </div>
    </Card>
  );
}

function ActivityListItem({ activity }: { activity: CarbonActivity }) {
  const category = ACTIVITY_CATEGORIES[activity.category];

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
      <div
        className={`text-2xl p-2 rounded-full ${category.color} bg-opacity-10`}
      >
        {category.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{activity.type}</h3>
        <p className="text-sm text-gray-600 truncate">{activity.description}</p>
        <p className="text-xs text-gray-500">{formatDate(activity.date)}</p>
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
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="text-4xl mb-4">🌱</div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">
        No activities yet
      </h3>
      <p className="text-gray-600">
        Start logging your activities to track your impact!
      </p>
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
