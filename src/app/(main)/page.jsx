import HeroSection from "@/components/HeroSection";
import AnnouncementBar from "@/components/AnnouncementBar";
import FeaturedTiles from "@/components/FeaturedTiles";
import WhyChooseVelora from "@/components/WhyChooseVelora";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnnouncementBar />
      <FeaturedTiles />
      <WhyChooseVelora />
      <CallToAction />
    </>
  );
}
