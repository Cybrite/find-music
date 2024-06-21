"use client";
import React, { useState } from "react";
import { Meteors } from "./ui/meteors";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email, message);
  }

  return (
    <div className="h-auto md:h-[50rem] bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 text-center">
      <h1 className="text-4xl md:text-7xl font-bold text-white">Contact Us</h1>

      <form onSubmit={handleSubmit} className="flex flex-col py-2 ">
        <input
          placeholder="Your Email"
          className="input rounded bg-gray-600 input-bordered input-primary w-full max-w-xs px-4 mt-5"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Query"
          className="input rounded bg-gray-600 input-bordered input-primary w-[30rem] h-[10rem] max-w-xs px-4 mt-5 mb-10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Send
        </button>
      </form>

      <Meteors number={100} />
    </div>
  );
}

export default ContactUs;
