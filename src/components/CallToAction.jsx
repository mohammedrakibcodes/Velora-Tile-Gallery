import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CallToAction() {
  return (
    <section className="bg-[#202940] py-20">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Transform Your Space With Velora
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[#CAAA98]">
          Discover premium tile collections crafted to elevate every room with
          style, elegance, and lasting quality.
        </p>

        <Link
          href="/all-tiles"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#CAAA98] px-7 py-3 font-semibold text-[#202940] transition-all duration-300 hover:bg-white"
        >
          Browse Collection
          <FiArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
