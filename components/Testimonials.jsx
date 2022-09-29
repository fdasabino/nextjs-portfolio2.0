import React from "react";
import { motion } from "framer-motion";
import { TestimonialsData } from "../constants/constants";
import { Carousel } from "react-responsive-carousel";
import { Card } from "antd";

const Testimonials = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <h3 className="mt-20 uppercase tracking-[10px] text-gray-400 text-lg md:text-2xl lg:text-3xl">
        Testimonials
      </h3>
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
            className="max-w-xs md:max-w-md lg:max-w-2xl"
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            emulateTouch={true}
            showArrows={false}
            autoPlay={false}
          >
            {TestimonialsData?.map((item) => (
              <Card className="max-w-full p-3" key={item.id} bordered={false}>
                <div className="relative h-40 w-40 mx-auto object-cover rounded-full border-solid border-2 border-teal-500 p-1 my-3">
                  <img src={item.img} alt={item.name} className="rounded-full" />
                </div>
                <div className="p-1">
                  <h3 className="uppercase tracking-wide text-gray-400 text-lg md:text-1xl">
                    {item.name}
                  </h3>
                </div>

                <div className="p-1">
                  <h4 className="uppercase tracking-wide text-gray-400 text-md">{item.position}</h4>
                </div>
                <div className="p-1">
                  <h5 className="uppercase tracking-wide text-gray-400 text-sm ">{item.company}</h5>
                </div>
                <div className="p-1">
                  <p className="tracking-normal text-gray-400 text-sm pb-3">{item.text}</p>
                </div>
              </Card>
            ))}
          </Carousel>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
