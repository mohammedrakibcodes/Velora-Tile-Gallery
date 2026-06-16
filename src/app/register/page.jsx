"use client";

import Link from "next/link";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function RegisterPage() {
  const handleRegister = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      photoURL: formData.get("photoURL"),
      password: formData.get("password"),
    };

    console.log(userData);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5F2] px-5 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#202940]">Create Account</h1>

          <p className="mt-3 text-[#9A8678]">
            Join Velora and discover premium tile collections.
          </p>
        </div>

        <Form onSubmit={handleRegister} className="mt-8 flex flex-col gap-5">
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input placeholder="Enter your full name" />
            <FieldError />
          </TextField>

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
            <Input placeholder="Create a password" />
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="mt-2 w-full rounded-lg bg-[#202940] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#4B4038]"
          >
            Register
          </Button>
        </Form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#CAAA98]/30"></div>

          <span className="text-sm text-[#9A8678]">OR</span>

          <div className="h-px flex-1 bg-[#CAAA98]/30"></div>
        </div>

        <p className="mt-6 text-center text-[#9A8678]">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#202940]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
