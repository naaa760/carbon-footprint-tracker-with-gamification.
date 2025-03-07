import { ActivityCategory } from "@/types/carbon";

export const ACTIVITY_CATEGORIES: Record<
  ActivityCategory,
  {
    label: string;
    icon: string;
    color: string;
  }
> = {
  transport: {
    label: "Transport",
    icon: "🚲",
    color: "bg-blue-500",
  },
  food: {
    label: "Food",
    icon: "🥗",
    color: "bg-green-500",
  },
  energy: {
    label: "Energy",
    icon: "⚡",
    color: "bg-yellow-500",
  },
  other: {
    label: "Other",
    icon: "📝",
    color: "bg-gray-500",
  },
};

export const ACTIVITY_IMPACTS: Record<string, number> = {
  "bike-ride": -2.5,
  "public-transport": -1.8,
  "car-ride": 2.3,
  "plant-based-meal": -3.2,
  "meat-meal": 4.5,
  "ac-usage": 1.8,
  "led-lights": -0.5,
};
