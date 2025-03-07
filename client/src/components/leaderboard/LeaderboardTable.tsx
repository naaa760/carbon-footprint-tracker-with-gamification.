"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { useLeaderboard } from "@/hooks/useLeaderboard";
import type { LeaderboardTimeframe } from "@/types/leaderboard";
import ErrorMessage from "@/components/ui/ErrorMessage";

function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
            <div className="w-16 h-4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LeaderboardTable() {
  const [timeframe, setTimeframe] = useState<LeaderboardTimeframe>("weekly");
  const { entries, isLoading, error } = useLeaderboard(timeframe);

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Leaderboard</h2>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value as LeaderboardTimeframe)}
          className="rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          <option value="weekly">This Week</option>
          <option value="monthly">This Month</option>
          <option value="allTime">All Time</option>
        </select>
      </div>

      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  Rank
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  User
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                  Score
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                  CO₂ Reduced
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                  Activities
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {entries.map((entry) => (
                <tr
                  key={entry.userId}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-sm">
                    <div className="flex items-center gap-1">
                      <span
                        className={
                          entry.rank <= 3
                            ? "font-semibold text-green-600"
                            : "text-gray-900"
                        }
                      >
                        #{entry.rank}
                      </span>
                      {entry.trend !== 0 && (
                        <TrendIndicator trend={entry.trend} />
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                        {entry.avatar || entry.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">
                        {entry.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-gray-900">
                    {entry.score}
                  </td>
                  <td className="px-4 py-3 text-right text-green-600">
                    {entry.carbonReduction.toFixed(1)} kg
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500">
                    {entry.activitiesCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

function TrendIndicator({ trend }: { trend: number }) {
  if (trend === 0) return null;

  return (
    <span
      className={`text-xs ${trend > 0 ? "text-green-600" : "text-red-600"}`}
    >
      {trend > 0 ? "↑" : "↓"}
      {Math.abs(trend)}
    </span>
  );
}
