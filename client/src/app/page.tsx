import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Carbon Footprint Tracker
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Track your carbon footprint, earn badges, and compete with others to
          help save the planet.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {userId ? (
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Go to Dashboard
              </Link>
              <SignOutButton>
                <button className="text-sm font-semibold leading-6 text-gray-900">
                  Sign out
                </button>
              </SignOutButton>
            </div>
          ) : (
            <>
              <Link
                href="/sign-up"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get started
              </Link>
              <Link
                href="/sign-in"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Sign in <span aria-hidden="true">→</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
