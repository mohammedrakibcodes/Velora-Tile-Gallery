"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function UpdateProfilePage() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleUpdate = async (event) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const image = formData.get("image");

    const { data, error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      console.log(error);
      alert(error.message || "Update failed");
      return;
    }

    console.log(data);

    alert("Profile updated successfully");

    router.push("/my-profile");
    router.refresh();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5F2] px-5 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-4xl font-bold text-[#202940]">
          Update Profile
        </h1>

        <Form onSubmit={handleUpdate} className="mt-8 flex flex-col gap-5">
          <TextField isRequired name="name">
            <Label>Name</Label>

            <Input placeholder="Enter your new name" />

            <FieldError />
          </TextField>

          <TextField isRequired name="image">
            <Label>Photo URL</Label>

            <Input placeholder="Enter image URL" />

            <FieldError />
          </TextField>

          <Button
            type="submit"
            isLoading={loading}
            className="mt-2 w-full rounded-lg bg-[#202940] py-3 font-semibold text-white"
          >
            Update Profile
          </Button>
        </Form>
      </div>
    </main>
  );
}
