import React from "react";
import { motion } from "framer-motion";
import { TestimonialsData } from "../constants/constants";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">Testimonials</h3>
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
          duration: 1.5,
        }}
        className="flex flex-col items-center justify-center overflow-hidden text-center"
      >
        <div className="flex items-center justify-center overflow-hidden text-center">
          <Carousel
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl"
            infiniteLoop={true}
            useKeyboardArrows
            transitionTime={1000}
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            emulateTouch={true}
            showArrows={true}
            autoPlay={false}
          >
            {TestimonialsData?.map((item) => (
              <div className="p-5" key={item.id}>
                {/* Image */}
                <div className="relative w-40 h-40 p-1 mx-auto my-3 border-2 border-teal-500 border-solid rounded-full">
                  <Image
                    layout="fill"
                    src={item.img}
                    alt={item.name}
                    className="object-scale-down p-6 rounded-full"
                  />
                </div>

                <div className="p-1">
                  <h3 className="text-2xl tracking-wide text-gray-400 uppercase">{item.name}</h3>
                  <h4 className="tracking-wide text-gray-400 uppercase text-1xl ">
                    {item.position}
                  </h4>
                  <h5 className="pb-3 tracking-wide text-gray-400 uppercase text-md">
                    {item.company}
                  </h5>
                  <p className="carouselText">&apos; {item.text} &apos;</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
