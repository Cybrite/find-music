import Link from "next/link";
import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { HeroContent } from "@/content/Hero_content";

function Hero() {
  return (
    <div className="h-auto md:h-[40rem] dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]  w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-2 md:py-0 text-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full ">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {HeroContent.title}
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            {HeroContent.des}
        </p>
        <div className="mt-5">
          <Link href={"/courses"}>
            
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              {HeroContent.button}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
