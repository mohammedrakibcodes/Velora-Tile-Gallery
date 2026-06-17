"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileImage({ src, alt }) {
  const [error, setError] = useState(false);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  if (!src || !isValidUrl(src) || error) {
    return (
      <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border-2 border-red-300 bg-red-50 p-3 text-center text-xs font-semibold text-red-600">
        Oops! ERROR Tip- Use a direct image URL from ImgBB
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={120}
      height={120}
      onError={() => setError(true)}
      className="h-[120px] w-[120px] rounded-full object-cover"
    />
  );
}
