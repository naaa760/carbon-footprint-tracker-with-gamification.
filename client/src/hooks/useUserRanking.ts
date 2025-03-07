"use client";

import { useState, useEffect } from "react";
import type { LeaderboardEntry } from "@/types/leaderboard";

export function useUserRanking() {
  const [userEntry, setUserEntry] = useState<LeaderboardEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUserRanking = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // This would normally be an API call
        const mockUserEntry: LeaderboardEntry = {
          userId: "current-user",
          name: "You",
          rank: 42,
          score: 520,
          trend: 3,
          carbonReduction: 78.5,
          activitiesCount: 28,
        };

        setUserEntry(mockUserEntry);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch user ranking")
        );
        setIsLoading(false);
      }
    };

    fetchUserRanking();
  }, []);

  return {
    userEntry,
    isLoading,
    error,
  };
}
