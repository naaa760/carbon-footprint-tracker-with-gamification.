"use client";

import { useState, useEffect } from "react";
import type { CarbonDataPoint } from "@/types/carbon";

export function useCarbon() {
  const [data, setData] = useState<CarbonDataPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // This would normally be an API call
        const mockData: CarbonDataPoint[] = [
          { date: "2024-01-01", carbon: 12.5 },
          { date: "2024-01-02", carbon: 10.2 },
          { date: "2024-01-03", carbon: 15.7 },
          { date: "2024-01-04", carbon: 8.9 },
          { date: "2024-01-05", carbon: 11.3 },
          { date: "2024-01-06", carbon: 9.8 },
          { date: "2024-01-07", carbon: 13.1 },
        ];

        setData(mockData);
        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch carbon data")
        );
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
}
