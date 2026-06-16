import Marquee from "react-fast-marquee";
import { TbTruckDelivery } from "react-icons/tb";
import { GoNorthStar } from "react-icons/go";
import { Award, HeartHandshake, Search } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <section className="border-y border-[#CAAA98]/20 bg-[#202940] py-4">
      <Marquee pauseOnHover speed={60}>
        <div className="flex items-center gap-20 text-white">
          <div className="flex items-center gap-2">
            <GoNorthStar size={18} className="text-[#CAAA98]" />
            <p>New Arrivals: Ocean Marble Collection</p>
          </div>

          <div className="flex items-center gap-2">
            <Award size={18} className="text-[#CAAA98]" />
            <p>Weekly Feature: Modern Geometric Patterns</p>
          </div>

          <div className="flex items-center gap-2">
            <HeartHandshake size={18} className="text-[#CAAA98]" />
            <p>Join the Velora Community</p>
          </div>

          <div className="flex items-center gap-2">
            <TbTruckDelivery size={20} className="text-[#CAAA98]" />
            <p>Free Delivery on Selected Collections</p>
          </div>

          <div className="flex items-center gap-2">
            <Search size={18} className="text-[#CAAA98]" />
            <p>Discover Premium Tile Inspirations</p>
          </div>
        </div>
      </Marquee>
    </section>
  );
}
