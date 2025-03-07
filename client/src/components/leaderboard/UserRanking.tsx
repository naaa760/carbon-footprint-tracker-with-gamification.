import { Card } from "@/components/ui/Card";
import type { LeaderboardEntry } from "@/types/leaderboard";
import ErrorMessage from "@/components/ui/ErrorMessage";

type UserRankingProps = {
  userEntry: LeaderboardEntry | null;
  isLoading?: boolean;
  error?: Error | null;
};

export default function UserRanking({
  userEntry,
  isLoading,
  error,
}: UserRankingProps) {
  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (isLoading) {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Your Ranking</h2>
        <div className="animate-pulse">
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      </Card>
    );
  }

  if (!userEntry) {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Your Ranking</h2>
        <p className="text-gray-600">No ranking data available.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Ranking</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Current Rank</p>
          <p className="text-3xl font-bold text-gray-900">#{userEntry.rank}</p>
          {userEntry.trend !== 0 && (
            <p
              className={`text-sm ${
                userEntry.trend > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {userEntry.trend > 0 ? "↑" : "↓"}
              {Math.abs(userEntry.trend)} positions
            </p>
          )}
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Total Score</p>
          <p className="text-3xl font-bold text-gray-900">{userEntry.score}</p>
          <p className="text-sm text-gray-600">points</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">CO₂ Reduced</p>
          <p className="text-3xl font-bold text-green-600">
            {userEntry.carbonReduction.toFixed(1)}
          </p>
          <p className="text-sm text-gray-600">kg</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Activities</p>
          <p className="text-3xl font-bold text-gray-900">
            {userEntry.activitiesCount}
          </p>
          <p className="text-sm text-gray-600">total</p>
        </div>
      </div>
    </Card>
  );
}
