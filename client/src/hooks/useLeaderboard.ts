"use client";

import { useState, useEffect } from "react";
import type {
  LeaderboardEntry,
  LeaderboardTimeframe,
} from "@/types/leaderboard";

const mockLeaderboardData: LeaderboardEntry[] = [
  {
    userId: "1",
    name: "Sarah Green",
    rank: 1,
    score: 850,
    trend: 2,
    carbonReduction: 125.5,
    activitiesCount: 42,
  },
  {
    userId: "2",
    name: "Mike Rivers",
    rank: 2,
    score: 720,
    trend: -1,
    carbonReduction: 98.3,
    activitiesCount: 35,
  },
  {
    userId: "3",
    name: "Emma Chen",
    rank: 3,
    score: 695,
    trend: 1,
    carbonReduction: 92.7,
    activitiesCount: 31,
  },
  {
    userId: "4",
    name: "Alex Taylor",
    rank: 4,
    score: 630,
    trend: 0,
    carbonReduction: 85.2,
    activitiesCount: 29,
  },
  {
    userId: "5",
    name: "James Wilson",
    rank: 5,
    score: 610,
    trend: -2,
    carbonReduction: 82.1,
    activitiesCount: 27,
  },
  {
    userId: "current-user",
    name: "You",
    rank: 42,
    score: 520,
    trend: 3,
    carbonReduction: 78.5,
    activitiesCount: 28,
  },
  // Add more entries as needed...
];

export function useLeaderboard(timeframe: LeaderboardTimeframe = "weekly") {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // In a real app, this would be an API call with the timeframe parameter
        setEntries(mockLeaderboardData);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch leaderboard")
        );
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, [timeframe]);

  return {
    entries,
    isLoading,
    error,
  };
}
