"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

// const content = [
//     {
//       title: "Collaborative Editing",
//       description:
//         "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Collaborative Editing
//         </div>
//       ),
//     },
//     {
//       title: "Real time changes",
//       description:
//         "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//       content: (
//         <div className="h-full w-full  flex items-center justify-center text-white">
//           {/* <Image
//             src="/linear.webp"
//             width={300}
//             height={300}
//             className="h-full w-full object-cover"
//             alt="linear board demo"
//           /> */}
//         </div>
//       ),
//     },
//     {
//       title: "Version control",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//           Version control
//         </div>
//       ),
//     },
//     {
//       title: "Running out of content",
//       description:
//         "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//       content: (
//         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//           Running out of content
//         </div>
//       ),
//     },
//   ];

const musicCourses = [
    {
      title: "Introduction to Music Theory",
      description: "Explore the cultural basis and historical context of diverse musical styles. Reflect on music notation as a problem-solving approach in musical expression using historically significant examples.",
    },
    {
      title: "Guitar Fundamentals",
      description: "Master the art of playing the guitar, from chords to fingerpicking techniques. Understand fretboard techniques, chord shapes, and strumming patterns.",
    },
    {
      title: "Piano for Beginners",
      description: "Learn keyboard basics, hand positions, and fingering techniques. Study note reading, scales, and basic music composition.",
    },
    {
      title: "Electronic Music Production",
      description: "Create electronic beats, melodies, and soundscapes using software tools. Explore synthesis, sampling, and arrangement techniques.",
    },
    {
      title: "Music History and Appreciation",
      description: "Trace the evolution of music styles from ancient to contemporary. Explore famous composers, cultural contexts, and musical movements.",
    },
    {
      title: "Vocal Techniques",
      description: "Improve breath control, vocal range, and expression. Study vocal health, resonance, and performance skills.",
    },
  ];
  

  
  
  
function StickyCard() {
  return (
    <div className="p-10 ">
      <StickyScroll content={musicCourses} />
    </div>
  );
}

export default StickyCard;
