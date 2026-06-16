import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5F2] px-5">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl font-bold text-[#CAAA98] md:text-9xl">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-[#202940] md:text-5xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-[#9A8678]">
          The page you are looking for does not exist or may have been moved.
          Explore our premium tile collection from the homepage.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="rounded-lg bg-[#202940] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[#4B4038]"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </main>
  );
}
