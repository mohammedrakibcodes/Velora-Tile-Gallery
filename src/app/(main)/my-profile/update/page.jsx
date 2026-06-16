"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function UpdateProfilePage() {
  const handleUpdateProfile = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const updatedUserInfo = {
      name: formData.get("name"),
      imageUrl: formData.get("imageUrl"),
    };

    console.log(updatedUserInfo);
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] py-16">
      <div className="mx-auto max-w-xl px-5">
        <div className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#202940]">
              Update Profile
            </h1>

            <p className="mt-3 text-[#9A8678]">
              Keep your profile information up to date.
            </p>
          </div>

          <Form
            onSubmit={handleUpdateProfile}
            className="mt-8 flex flex-col gap-5"
          >
            <TextField isRequired name="name">
              <Label>Name</Label>

              <Input placeholder="Enter your full name" />

              <FieldError />
            </TextField>

            <TextField isRequired name="imageUrl">
              <Label>Image URL</Label>

              <Input placeholder="Enter your profile image URL" />

              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#202940] py-3 font-semibold text-white transition-all duration-300 hover:bg-[#4B4038]"
            >
              Update Information
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
}
