"use client";

import { useState, useEffect } from "react";
import type { CarbonStats } from "@/types/carbon";

export function useStats() {
  const [stats, setStats] = useState<CarbonStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // This would normally be an API call
        const mockStats: CarbonStats = {
          total: 245.5,
          average: 12.3,
          trend: -8.5,
        };

        setStats(mockStats);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch statistics")
        );
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return {
    stats,
    isLoading,
    error,
  };
}
