"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function TileDetailsPage() {
  const params = useParams();

  const [tile, setTile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTile = async () => {
      try {
        const response = await fetch("/data/tiles.json");
        const data = await response.json();

        const selectedTile = data.find((item) => item.id === Number(params.id));

        setTile(selectedTile);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadTile();
  }, [params.id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F8F5F2]">
        <span className="loading loading-spinner loading-lg text-[#202940]"></span>
      </main>
    );
  }

  return (
    <main className="bg-[#F8F5F2] py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <div className="relative h-[350px] md:h-[500px]">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="rounded-full bg-[#CAAA98]/15 px-4 py-2 text-sm font-medium text-[#4B4038]">
              {tile.category}
            </span>

            <h1 className="mt-5 text-4xl font-bold text-[#202940] md:text-5xl">
              {tile.title}
            </h1>

            <p className="mt-6 leading-8 text-[#9A8678]">{tile.description}</p>

            <div className="mt-8 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex justify-between border-b border-[#CAAA98]/20 pb-3">
                <span className="font-medium text-[#9A8678]">Price</span>

                <span className="font-semibold text-[#202940]">
                  {tile.price}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#CAAA98]/20 pb-3">
                <span className="font-medium text-[#9A8678]">Dimensions</span>

                <span className="font-semibold text-[#202940]">
                  {tile.dimensions}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#CAAA98]/20 pb-3">
                <span className="font-medium text-[#9A8678]">Material</span>

                <span className="font-semibold text-[#202940]">
                  {tile.material}
                </span>
              </div>

              <div className="flex justify-between border-b border-[#CAAA98]/20 pb-3">
                <span className="font-medium text-[#9A8678]">Creator</span>

                <span className="font-semibold text-[#202940]">
                  {tile.creator}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-[#9A8678]">Availability</span>

                <span
                  className={`font-semibold ${
                    tile.stock === "Available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {tile.stock}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#202940]">
                Style Description
              </h3>

              <p className="mt-3 leading-8 text-[#9A8678]">
                {tile.styleDescription}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-[#202940]">Tags</h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#CAAA98]/15 px-4 py-2 text-sm font-medium text-[#4B4038]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/all-tiles"
              className="mt-10 inline-block rounded-lg bg-[#202940] px-6 py-3 font-medium text-white transition hover:bg-[#4B4038]"
            >
              Back To Gallery
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
