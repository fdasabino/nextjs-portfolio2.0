import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { HeroData } from "../constants/constants";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["<Hi, I'm Francisco Sabino />", "<Student at Hyper Island />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {HeroData?.map((item) => (
        <Fragment key={item.id}>
          <img
            key={item.id}
            className="relative h-40 w-40 mx-auto object-cover rounded-full border-solid border-2 border-teal-500 p-1 my-3"
            src={item.image}
          />
          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-widest">{item.title}</h2>
            <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold px-5">
              <span className="mr-3">{text}</span>
              <Cursor cursorColor="#14a085" />
            </h1>

            <div className="pt-6">
              <Link href="#contact">
                <button className="mainButton">Contact</button>
              </Link>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Hero;
