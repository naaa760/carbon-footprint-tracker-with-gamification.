import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="w-full max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Track Your <span className="text-green-600">Carbon Footprint</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Track your carbon footprint, earn badges, and compete with others to
            help save the planet. Join our community of eco-conscious
            individuals making a difference.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {userId ? (
              <div className="flex gap-4">
                <Link
                  href="/dashboard"
                  className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Go to Dashboard
                </Link>
                <SignOutButton>
                  <button className="px-6 py-3 text-sm font-semibold text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50">
                    Sign out
                  </button>
                </SignOutButton>
              </div>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Get started
                </Link>
                <Link
                  href="/sign-in"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
                >
                  Sign in <span aria-hidden="true">→</span>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <FeatureCard
            icon="🌱"
            title="Track Daily Impact"
            description="Log your daily activities and see their environmental impact in real-time"
          />
          <FeatureCard
            icon="🏆"
            title="Earn & Compete"
            description="Earn badges and compete with friends while making eco-friendly choices"
          />
          <FeatureCard
            icon="📊"
            title="Monitor Progress"
            description="View detailed analytics and track your improvement over time"
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 text-center hover:border-green-500 transition-colors">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
