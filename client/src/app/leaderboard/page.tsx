"use client";

import LeaderboardTable from "@/components/leaderboard/LeaderboardTable";
import UserRanking from "@/components/leaderboard/UserRanking";
import { useUserRanking } from "@/hooks/useUserRanking";

export default function LeaderboardPage() {
  const { userEntry, isLoading, error } = useUserRanking();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Leaderboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeaderboardTable />
        </div>
        <div>
          <UserRanking
            userEntry={userEntry}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}
