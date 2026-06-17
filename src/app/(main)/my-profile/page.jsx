import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getSession } from "@/lib/get-session";

export default async function MyProfilePage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const user = session.user;

  return (
    <main className="min-h-screen bg-[#F8F5F2] px-5 py-16">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <Image
            src={user?.image || "/user.png"}
            alt={user?.name || "User"}
            width={120}
            height={120}
            className="h-30 w-30 rounded-full object-cover"
          />

          <h1 className="mt-5 text-3xl font-bold text-[#202940]">
            {user?.name}
          </h1>

          <p className="mt-2 text-[#9A8678]">{user?.email}</p>

          <Link
            href="/my-profile/update"
            className="mt-6 rounded-lg bg-[#202940] px-6 py-3 font-medium text-white transition hover:bg-[#4B4038]"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
