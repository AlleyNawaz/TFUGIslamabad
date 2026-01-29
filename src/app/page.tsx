import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProgramGrid } from "@/components/sections/ProgramGrid";
import { FeaturedSpeakers } from "@/components/sections/FeaturedSpeakers";
import { LatestBlogs } from "@/components/sections/LatestBlogs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <ProgramGrid />
      <FeaturedSpeakers />
      <LatestBlogs />
    </div>
  );
}
