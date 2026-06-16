"use client";

import { useEffect, useState } from "react";
import TileCard from "@/components/TileCard";

export default function AllTilesPage() {
  const [tiles, setTiles] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const loadTiles = async () => {
      const response = await fetch("/data/tiles.json");
      const data = await response.json();

      setTiles(data);
    };

    loadTiles();
  }, []);

  const filteredTiles = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-[#F8F5F2] py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[3px] text-[#CAAA98]">
            Explore Collection
          </p>

          <h1 className="text-4xl font-bold text-[#202940] md:text-5xl">
            All Tiles
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#9A8678]">
            Browse our premium tile collection and discover the perfect design
            for your next interior project.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <input
            type="text"
            placeholder="Search tiles by title..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full rounded-xl border border-[#CAAA98]/30 bg-white px-5 py-4 outline-none transition focus:border-[#202940]"
          />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredTiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>

        {filteredTiles.length === 0 && (
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-[#202940]">
              No Tiles Found
            </h3>

            <p className="mt-2 text-[#9A8678]">
              Try searching with a different title.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
