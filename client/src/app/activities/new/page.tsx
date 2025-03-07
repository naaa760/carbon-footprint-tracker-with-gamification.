import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import ActivityForm from "@/components/activities/ActivityForm";

export default async function NewActivityPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Log New Activity</h1>
          <Link
            href="/activities"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to Activities
          </Link>
        </div>
        <ActivityForm />
      </div>
    </div>
  );
}
