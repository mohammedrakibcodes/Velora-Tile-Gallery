"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import AuthModal from "@/components/AuthModal";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      alert(error.message || "Login failed");
      return;
    }

    document.getElementById("login-success").checked = true;

    setTimeout(() => {
      router.push("/");
      router.refresh();
    }, 2000);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5F2] px-5 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#202940]">Welcome Back</h1>

          <p className="mt-3 text-[#9A8678]">
            Login to explore premium tile collections.
          </p>
        </div>

        <Form onSubmit={handleLogin} className="mt-8 flex flex-col gap-5">
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>

            <Input placeholder="Enter your email" />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 6) {
                return "Password must be at least 6 characters";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input placeholder="Enter your password" />

            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[#202940] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#4B4038]"
          >
            Login
          </Button>
        </Form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#CAAA98]/30"></div>

          <span className="text-sm text-[#9A8678]">OR</span>

          <div className="h-px flex-1 bg-[#CAAA98]/30"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-[#CAAA98]/30 py-3 font-medium text-[#202940] transition-all duration-300 hover:bg-[#F8F5F2]"
        >
          <FcGoogle size={22} />
          Continue With Google
        </button>

        <p className="mt-6 text-center text-[#9A8678]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[#202940]">
            Register
          </Link>
        </p>

        <AuthModal
          modalId="login-success"
          title="🎉 Welcome Back!"
          message="You have logged in successfully."
        />
      </div>
    </main>
  );
}
