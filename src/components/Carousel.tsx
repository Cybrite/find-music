"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Carousel() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">

      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];

const musicTestimonials = [
  {
    quote:
      "Music Industry How To helped me reflect about my whole creation process and release strategy. Now, after a year, I have a release strategy, my streaming audience has grown from 150 monthly listeners to 200k.",
    name: "Tharyk",
    title: "Swedish Pop, Reggaeton, and Urban Singer",
  },
  {
    quote:
      "Music Industry How To has been guiding me on the right path to success. It backed up my beliefs and showed me new ideas and working patterns in the music industry today.",
    name: "Rudebone",
    title: "Viral Tik Tok Artist",
  },
  {
    quote:
      "You've guided me through every step and opened the music world up for me. Thank you so much for all your help.",
    name: "Karen Salicath Jamali",
    title: "Classical Pianist",
  },
  {
    quote:
      "Music Industry How To restored my faith in the possibility of becoming a full-time musician. It helped me start looking in the right direction for opportunities by giving me insight into the climate of today's music industry, and strategies that are currently working for successful artists.",
    name: "Indigo Rose",
    title: "Northern Touch Music Festival 2019 Performer",
  },
  {
    quote:
      "I'll extend my thanks to Shaun Letang for the course. So far it is great. I'm excited to get to the business aspect of it since that is my weak point in this whole endeavor, as I imagine it is to most other musicians here.",
    name: "Andrew Bureau",
    title: "Melodic-Metal Solo Instrumentalist from Canada",
  },
  {
    quote:
      "Since I adore making music, I want a way to turn my passion into a career which is why I signed up. The course is very informative and has really taught me a great deal already, so kudos to the creators!",
    name: "Jack Lawlor",
    title: "Guitarist",
  },
  {
    quote: "Loving the video content so far! Thank you!",
    name: "Sito VRSE",
    title: "Trap & Reggaeton Artist from Spain",
  },
  {
    quote:
      "After taking your music course, I applied what I learned immediately. In just 2.5 months, I have reached over 800 views on my FIRST YouTube video including 20 thumbs up and multiple positive comments, as well as over 20 subscribers.",
    name: "Anonymous Student",
    title: "Aspiring Musician",
  },
];
