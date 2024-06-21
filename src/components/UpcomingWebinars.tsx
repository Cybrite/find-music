"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

// export const projects = [
//     {
//       title: "Stripe",
//       description:
//         "A technology company that builds economic infrastructure for the internet.",
//       link: "https://stripe.com",
//     },
//     {
//       title: "Netflix",
//       description:
//         "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//       link: "https://netflix.com",
//     },
//     {
//       title: "Google",
//       description:
//         "A multinational technology company that specializes in Internet-related services and products.",
//       link: "https://google.com",
//     },
//     {
//       title: "Meta",
//       description:
//         "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//       link: "https://meta.com",
//     },
//     {
//       title: "Amazon",
//       description:
//         "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//       link: "https://amazon.com",
//     },
//     {
//       title: "Microsoft",
//       description:
//         "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//       link: "https://microsoft.com",
//     },
//   ];

const musicWebinars = [
  {
    title: "Smart Links for Music Promotion",
    description:
      "Learn how Smart Links can boost your music releases and effectively market your tracks.",
    link: "https://example.com/smart-links-webinar",
  },
  {
    title: "Unlocking Music Career Success",
    description:
      "Discover strategies to advance your music career, from branding to networking.",
    link: "https://example.com/music-career-webinar",
  },
  {
    title: "Creating Catchy Melodies",
    description:
      "Explore techniques for composing memorable melodies that resonate with listeners.",
    link: "https://example.com/melodies-webinar",
  },
  {
    title: "Live Performance Tips and Tricks",
    description:
      "Get insights on stage presence, audience engagement, and live music performance.",
    link: "https://example.com/live-performance-webinar",
  },
  {
    title: "Music Production Masterclass",
    description:
      "Learn about recording, mixing, and producing professional-quality music.",
    link: "https://example.com/music-production-webinar",
  },
  {
    title: "Songwriting Secrets Revealed",
    description:
      "Uncover the art of songwriting, from lyrics to song structure.",
    link: "https://example.com/songwriting-webinar",
  },
];

function UpcomingWebinars() {
  return (
    <div className="py-12 bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className=" text-base uppercase text-teal-600 font-semibold teacking-wide">
            upcoming webinars
          </h2>
          <p className=" mt-2 text-xl leading-8 font-extrabold tracking-light sm:text-xl ">
            Enhance Your Skills,See You in Class!
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={musicWebinars} />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href={"/webinars"}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Webinars
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
