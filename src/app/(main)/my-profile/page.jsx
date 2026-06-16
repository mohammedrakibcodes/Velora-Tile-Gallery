import Image from "next/image";
import Link from "next/link";

export default function MyProfilePage() {
  const user = {
    name: "Mohammed Rakib",
    email: "rakib@example.com",
    image:
      "https://i.ibb.co/7d5bWDQH/patrick-hendry-hez-Nr-E5-QEa8-unsplash.jpg",
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] py-16">
      <div className="mx-auto max-w-4xl px-5">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#CAAA98]/30">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>

            <h1 className="mt-6 text-4xl font-bold text-[#202940]">
              {user.name}
            </h1>

            <p className="mt-2 text-[#9A8678]">{user.email}</p>
          </div>

          <div className="mt-10 rounded-2xl bg-[#F8F5F2] p-6">
            <div className="space-y-5">
              <div>
                <p className="text-sm text-[#9A8678]">Full Name</p>

                <p className="mt-1 text-lg font-semibold text-[#202940]">
                  {user.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-[#9A8678]">Email Address</p>

                <p className="mt-1 text-lg font-semibold text-[#202940]">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/my-profile/update"
              className="inline-block rounded-lg bg-[#202940] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[#4B4038]"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
