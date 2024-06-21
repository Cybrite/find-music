"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


const Skeleton = ({children}: {children: React.ReactNode}) => (
    <div className="flex flex-1 items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        {children}
    </div>
  );

const musicWebinars = [
    {
      title: "Smart Links for Music Promotion",
      description:
        "Learn how Smart Links can boost your music releases and effectively market your tracks.",
      link: "https://example.com/smart-links-webinar",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton> Smart Links for Music Promotion </Skeleton>,
    },
    {
      title: "Unlocking Music Career Success",
      description:
        "Discover strategies to advance your music career, from branding to networking.",
      link: "https://example.com/music-career-webinar",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton> Unlocking Music Career Success </Skeleton>,
    },
    {
      title: "Creating Catchy Melodies",
      description:
        "Explore techniques for composing memorable melodies that resonate with listeners.",
      link: "https://example.com/melodies-webinar",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton> Creating Catchy Melodies </Skeleton>,
    },
    {
      title: "Live Performance Tips and Tricks",
      description:
        "Get insights on stage presence, audience engagement, and live music performance.",
      link: "https://example.com/live-performance-webinar",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton> Live Performance Tips and Tricks </Skeleton>,
    },
    {
      title: "Music Production Masterclass",
      description:
        "Learn about recording, mixing, and producing professional-quality music.",
      link: "https://example.com/music-production-webinar",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton> Music Production Masterclass </Skeleton>,
    },
    {
      title: "Songwriting Secrets Revealed",
      description:
        "Uncover the art of songwriting, from lyrics to song structure.",
      link: "https://example.com/songwriting-webinar",
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
      header: <Skeleton> Songwriting Secrets Revealed </Skeleton>,
    },
  ];



function page() {
  return (
    <>
      <div className="min-h-screen bg-black py-12 pt-36">
        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          Webinars
        </h3>
        <div>   <BentoGrid className="max-w-4xl mx-auto">
      {musicWebinars.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid></div>
      </div>
      <BackgroundBeams />
    </>
  );
}

export default page;
