import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function TileCard({ tile }) {
  const { id, image, title, category, price, dimensions, stock } = tile;

  return (
    <div className="group overflow-hidden rounded-2xl border border-[#CAAA98]/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          priority
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <span className="rounded-full bg-[#CAAA98]/15 px-3 py-1 text-xs font-medium text-[#4B4038]">
            {category}
          </span>

          <h3 className="mt-3 text-xl font-bold text-[#202940]">{title}</h3>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-[#9A8678]">Dimension</span>

            <span className="font-medium text-[#202940]">{dimensions}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#9A8678]">Price</span>

            <span className="font-bold text-[#202940]">{price}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[#9A8678]">Stock</span>

            <span
              className={`font-medium ${
                stock === "Available" ? "text-green-600" : "text-red-500"
              }`}
            >
              {stock}
            </span>
          </div>
        </div>

        <Link
          href={`/tile/${id}`}
          className="flex items-center justify-center gap-2 rounded-lg bg-[#202940] px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-[#4B4038]"
        >
          View Details
          <FiArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
