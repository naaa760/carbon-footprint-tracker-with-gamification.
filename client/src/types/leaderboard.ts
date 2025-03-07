export type LeaderboardEntry = {
  userId: string;
  name: string;
  avatar?: string;
  rank: number;
  score: number;
  trend: number;
  carbonReduction: number;
  activitiesCount: number;
};

export type LeaderboardTimeframe = "weekly" | "monthly" | "allTime";
