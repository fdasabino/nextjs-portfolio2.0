import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["<Hi, I'm Francisco Sabino>", "<Student at Hyper Island />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      Hero
    </div>
  );
};

export default Hero;
