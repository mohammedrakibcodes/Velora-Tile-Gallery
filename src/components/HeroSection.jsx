"use client";

import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { IoArrowForward } from "react-icons/io5";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      <Image
        src="/Hero.png"
        alt="Velora Tile Gallery"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#202940]/65" />

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#CAAA98]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#9A8678]/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-12 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#CAAA98] bg-[#CAAA98]/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#CAAA98] opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#CAAA98]"></span>
            </span>

            <span className="text-white">Premium Tile Collection</span>
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Discover Your
            <span className="font-extrabold block text-[#CAAA98]">
              Perfect Aesthetic
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Transform your interiors with carefully curated tile collections.
            Explore elegant textures, modern finishes, and timeless designs
            crafted to elevate every corner of your space.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/all-tiles"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#CAAA98] px-7 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#9A8678]"
            >
              Browse Now
              <IoArrowForward size={18} />
            </Link>

            <button className="rounded-lg border border-white px-7 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#202940]">
              Explore Collection
            </button>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={500} duration={3} enableScrollSpy scrollSpyOnce />
                +
              </h3>
              <p className="mt-2 text-sm text-gray-300">Premium Tiles</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={120} duration={3} enableScrollSpy scrollSpyOnce />
                +
              </h3>
              <p className="mt-2 text-sm text-gray-300">Unique Designs</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                <CountUp end={15} duration={3} enableScrollSpy scrollSpyOnce />
                K+
              </h3>
              <p className="mt-2 text-sm text-gray-300">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
