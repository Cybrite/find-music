"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
import { people } from "@/content/Instructors_contact";

export default function Instructors() {
  return (
    <div className="relative h-[35rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-7xl w-full flex flex-col items-center justify-center h-full mx-auto pb-40">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p>
          Discover Talented Professionals Who Will Help You Grow in Your Music
          Journey
        </p>
        <div className="flex flex-row items-center justify-center mb-8 w-full mt-10">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}
