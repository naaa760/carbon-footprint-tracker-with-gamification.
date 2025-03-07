import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CarbonChart from "@/components/dashboard/CarbonChart";
import StatsGrid from "@/components/dashboard/StatsGrid";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import BadgeSection from "@/components/dashboard/BadgeSection";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <CarbonChart />
        </div>
        <div>
          <StatsGrid />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div>
          <BadgeSection />
        </div>
      </div>
    </div>
  );
}
