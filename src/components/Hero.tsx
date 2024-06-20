import Link from "next/link";

function Hero() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-sm flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 text-center">
      <div className="p-4 relative z-10 w-full ">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into comprehensive Music courses and get ready to immerse
          yourself in the world of music. Whether you are a beginner or an
          expert, our courses will help you master the art of music.
        </p>
        <div className="mt-5">
          <Link href={"/courses"}>Explore Courses</Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
