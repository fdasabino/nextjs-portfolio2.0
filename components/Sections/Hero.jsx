import React, { Fragment } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { HeroData } from "../../constants/constants";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";
import Planetarium from "../Layout/Planetarium";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["<Front End Developer at Iquest/>", "<Student at Hyper Island/>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 0.6,
        }}
        className="relative flex flex-col items-center justify-center h-screen text-center"
      >
        {HeroData?.map((item) => (
          <div
            key={item.id}
            className="relative z-40 flex flex-col items-center justify-center min-w-full min-h-full"
          >
            <div className="relative w-40 h-40 p-1 mx-auto my-3 border-2 border-teal-500 shadow-[0px_0px_100px_40px_rgba(8,_112,_184,_0.6)] border-solid rounded-full md:w-52 md:h-52">
              <Image
                priority
                height={600}
                width={600}
                key={item.id}
                src={item.image}
                alt={item.title}
                className="z-50 object-cover transition-opacity duration-300 ease-in-out rounded-full "
              />
            </div>
            <Planetarium />
            <div className="z-40 my-10">
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
                    transition={{ duration: 0.1 }}
                    className="mb-8 mainButton shake-horizontal"
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </div>
            <motion.div className="arrowDown">
              <Link to="about">
                <BsChevronDoubleDown />
              </Link>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Hero;
