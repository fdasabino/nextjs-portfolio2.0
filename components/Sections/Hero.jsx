import React, { Fragment } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { HeroData } from "../../constants/constants";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";

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
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-40 flex flex-col items-center justify-center h-screen overflow-hidden text-center"
      >
        {HeroData?.map((item) => (
          <Fragment key={item.id}>
            <div className="relative w-40 h-40 p-1 mx-auto my-3 border-2 border-teal-500 border-solid rounded-full mt-14 md:w-52 md:h-52 lg:w-80 lg:h-80">
              <Image
                priority
                height={600}
                width={600}
                key={item.id}
                src={item.image}
                alt={item.title}
                className="z-50 object-cover transition-opacity duration-300 ease-in-out rounded-full"
              />
            </div>
            <div className="my-10">
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
          </Fragment>
        ))}
      </motion.div>
    </>
  );
};

export default Hero;
