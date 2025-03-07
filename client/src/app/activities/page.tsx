import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ActivityForm from "@/components/activities/ActivityForm";
import { Card } from "@/components/ui/Card";

export default async function ActivitiesPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Activities</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            {/* We'll implement ActivityList component later */}
          </Card>
        </div>
        <div>
          <ActivityForm />
        </div>
      </div>
    </div>
  );
}
