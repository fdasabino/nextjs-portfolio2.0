import React, { Fragment } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { HeroData } from "../constants/constants";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["<Front End Developer at Iquest/>", "<Student at Hyper Island />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center">
      {HeroData?.map((item) => (
        <Fragment key={item.id}>
          <div className="relative w-48 h-48 p-1 mx-auto my-3 border-2 border-teal-500 border-solid rounded-full md:w-80 md:h-80">
            <Image
              priority
              layout="fill"
              key={item.id}
              src={item.image}
              alt={item.title}
              className="object-cover rounded-full"
            />
          </div>
          <div className="z-20">
            <h2 className="pb-2 text-sm tracking-widest text-teal-500 uppercase">{item.title}</h2>
            <h1 className="px-5 text-sm font-semibold md:text-2xl lg:text-4xl">
              <span className="mr-3 text-gray-400">{text}</span>
              <Cursor cursorColor="#14a085" />
            </h1>

            <div className="pt-6">
              <Link to="contact">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mainButton"
                >
                  Contact
                </motion.button>
              </Link>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Hero;
