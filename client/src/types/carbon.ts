export type CarbonDataPoint = {
  date: string;
  carbon: number;
};

export type CarbonStats = {
  total: number;
  average: number;
  trend: number;
};

export type ActivityCategory = "transport" | "food" | "energy" | "other";

export type CarbonActivity = {
  id: string;
  userId: string;
  category: ActivityCategory;
  type: string;
  description: string;
  impact: number;
  date: string;
  createdAt: string;
};
