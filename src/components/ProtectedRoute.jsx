"use client";

import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !data?.session) {
      router.push("/login");
    }
  }, [data, isPending, router]);

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return children;
}
