import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["<Hi, I'm Francisco Sabino>", "<Student at Hyper Island />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative h-40 w-40 mx-auto rounded-full border border-[#14a085] p-2 object-cover"
        src="https://res.cloudinary.com/frank2021/image/upload/v1652788529/portfolio/me.ee24849d87fd96da986a_jqze0d.jpg"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-widest">
          Front End Developer
        </h2>
        <h1 className="text-2xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#14a085" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
