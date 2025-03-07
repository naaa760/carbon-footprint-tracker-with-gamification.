"use client";

import { Card } from "@/components/ui/Card";
import { useCarbon } from "@/hooks/useCarbon";
import ErrorMessage from "@/components/ui/ErrorMessage";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function CarbonChart() {
  const { data, isLoading, error } = useCarbon();

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (isLoading) {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">
          Carbon Footprint Over Time
        </h2>
        <div className="h-[300px] animate-pulse bg-gray-100 rounded-lg" />
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Carbon Footprint Over Time</h2>
      <div className="h-[300px]">
        {/* @ts-expect-error recharts type definitions are incomplete */}
        <ResponsiveContainer width="100%" height="100%">
          {/* @ts-expect-error recharts type definitions are incomplete */}
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            {/* @ts-expect-error recharts type definitions are incomplete */}
            <XAxis
              dataKey="date"
              tickFormatter={(date) =>
                new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }
            />
            {/* @ts-expect-error recharts type definitions are incomplete */}
            <YAxis unit="kg" />
            {/* @ts-expect-error recharts type definitions are incomplete */}
            <Tooltip
              labelFormatter={(date) => new Date(date).toLocaleDateString()}
              formatter={(value) => [`${value} kg`, "Carbon"]}
            />
            {/* @ts-expect-error recharts type definitions are incomplete */}
            <Line
              type="monotone"
              dataKey="carbon"
              stroke="#16a34a"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
