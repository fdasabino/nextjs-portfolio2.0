import React from "react";
import { motion } from "framer-motion";
import { TestimonialsData } from "../constants/constants";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">Testimonials</h3>
      <div className="flex flex-col items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="flex items-center justify-center text-center overflow-hidden"
        >
          <Carousel
            className="max-w-xs md:max-w-md lg:max-w-2xl "
            infiniteLoop={true}
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
                <div className="relative h-40 w-40 mx-auto object-cover rounded-full border-solid border-2 border-teal-500 p-1 my-3">
                  <img src={item.img} alt={item.name} className="rounded-full" />
                </div>

                <div className="p-1">
                  <h3 className="uppercase tracking-wide text-gray-400 text-2xl">{item.name}</h3>
                  <h4 className="uppercase tracking-wide text-gray-400 text-1xl ">
                    {item.position}
                  </h4>
                  <h5 className="uppercase tracking-wide text-gray-400 text-md pb-3">
                    {item.company}
                  </h5>
                  <p className="tracking-wide  text-sm text-justify pb-3 leading-6 my-10">
                    " {item.text} "
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
