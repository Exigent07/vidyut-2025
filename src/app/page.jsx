"use client";

import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { Nav } from "@/components/Nav";
import { ThemeSection } from "@/components/ThemeSection";

export default function Home() {
  return (
    <main className="bg-[#0B0C11] w-full min-h-screen overflow-hidden">
      <Nav />
      <HeroSection />
      <ExperienceSection />
      <ThemeSection />
    </main>
  );
}
