import {
  MdOutlineWorkspacePremium,
  MdOutlineLocalShipping,
} from "react-icons/md";

import { LuLayoutGrid } from "react-icons/lu";
import { HiOutlineSparkles } from "react-icons/hi";

export default function WhyChooseVelora() {
  const features = [
    {
      title: "Premium Quality",
      description:
        "Carefully selected tiles crafted with durability and elegance in mind.",
      icon: <MdOutlineWorkspacePremium size={36} />,
    },
    {
      title: "Modern Designs",
      description:
        "Explore contemporary, minimalist, luxury and timeless collections.",
      icon: <LuLayoutGrid size={36} />,
    },
    {
      title: "Fast Delivery",
      description:
        "Reliable delivery service to bring your chosen collection quickly.",
      icon: <MdOutlineLocalShipping size={36} />,
    },
    {
      title: "Interior Inspiration",
      description:
        "Discover unique styles that transform ordinary spaces into masterpieces.",
      icon: <HiOutlineSparkles size={36} />,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[3px] text-[#CAAA98]">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold text-[#202940] md:text-5xl">
            Why Choose Velora
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#9A8678]">
            We combine premium materials, innovative designs and trusted
            craftsmanship to help create exceptional interiors.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[#CAAA98]/20 bg-[#F8F5F2] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-[#202940]">{feature.icon}</div>

              <h3 className="mt-5 text-xl font-bold text-[#202940]">
                {feature.title}
              </h3>

              <p className="mt-3 text-[#9A8678]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
