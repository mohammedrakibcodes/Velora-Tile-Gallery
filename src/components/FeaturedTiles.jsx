"use client";

import { useEffect, useState } from "react";
import TileCard from "./TileCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function FeaturedTiles() {
  const [featuredTiles, setFeaturedTiles] = useState([]);

  useEffect(() => {
    const loadTiles = async () => {
      const response = await fetch("/data/tiles.json");
      const data = await response.json();

      setFeaturedTiles(data.slice(0, 4));
    };

    loadTiles();
  }, []);

  return (
    <section className="bg-[#F8F5F2] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[3px] text-[#CAAA98]">
            Featured Collection
          </p>

          <h2 className="text-4xl font-bold text-[#202940] md:text-5xl">
            Featured Tiles
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#9A8678]">
            Explore our handpicked tile collections crafted to bring elegance,
            durability, and timeless beauty to your interiors.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {featuredTiles.map((tile) => (
            <SwiperSlide key={tile.id}>
              <TileCard tile={tile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
