import React from "react";
import { motion } from "framer-motion";
import { TestimonialsData } from "../../constants/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-scroll";
import { BsChevronDoubleDown } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className="sectionDivider" />
      <h3 className="sectionTitle">Testimonials</h3>
      <motion.div
        className="w-full max-w-4xl"
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
      >
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {TestimonialsData.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <div className="mySwiper__container">
                <div className="mySwiper__wrapper">
                  <div className="my-8 mySwiper__section">
                    <p className="text-lg font-bold text-gray-400 md:text-xl">{testimonial.name}</p>
                  </div>

                  <div className="mySwiper__section">
                    <div className="flex flex-col items-center justify-center gap-4 my-4 md:flex-row">
                      <div className="flex flex-col items-center justify-center flex-1 max-w-md">
                        <div className="w-48 h-48 border border-teal-400 rounded-lg md:w-80 md:h-80">
                          <Image
                            src={testimonial.img}
                            width={1000}
                            height={1000}
                            alt={testimonial.name}
                            className="rounded-lg"
                          />
                        </div>
                        <div className="flex gap-10 my-4">
                          <p className="text-xs font-bold text-gray-400 md:text-base whitespace-nowrap">
                            {testimonial.position}
                          </p>
                          <p className="text-xs font-bold text-gray-400 md:text-base whitespace-nowrap">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center flex-1 my-auto">
                        <div className="flex flex-col gap-6 mx-10 text-justify md:mr-6 md:mx-0">
                          <p className="text-sm text-gray-400 md:text-base">{testimonial.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div className="arrowDown">
        <Link to="contact">
          <BsChevronDoubleDown />
        </Link>
      </motion.div>
    </div>
  );
};

export default Testimonials;
