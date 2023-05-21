import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";
import { BsChevronDoubleUp } from "react-icons/bs";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_6pcnbro";
  const templateID = "template_w84ym0d";
  const userID = "user_CohGKIqjoqB7yATeEglvy";

  const onSubmit = (data, reset) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    );
    reset.target.reset();
    console.log(data);
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(toast.success("Message Sent Successfully!!!"));
        console.log(successMessage, "Form sent successfully!");
        setTimeout(() => {
          document.location.reload();
        }, 5000);
      })
      .catch((err) => {
        console.error(`Something went wrong ${err}`);
      });
  };
  return (
    <>
      <div className="relative flex flex-col items-center pb-10">
        <div className="sectionDivider" />
        <motion.div className="mt-8 arrowUp">
          <Link to="hero">
            <BsChevronDoubleUp />
          </Link>
        </motion.div>
        <h3 className="sectionTitle">Contact</h3>
        <h4 className="max-w-md my-10 text-sm text-center text-gray-400 uppercase md:text-md ">
          Just now, I am looking for projects or collaborations where I can show my skills and learn
          more. Send me a message if you have something in mind.{" "}
          <span className="underline decoration-[#14a085]">Let&apos;s chat!</span>
        </h4>
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 0.1,
        }}
        className="max-w-md mx-auto overflow-hidden text-center"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          {/* Name */}
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder={!errors.name ? "Name" : "Name"}
            className={`contactInput ${errors.name && "error"}`}
          />
          {/* Phone */}
          <input
            type="number"
            {...register("phone", {
              pattern: /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/i,
              required: true,
            })}
            placeholder={!errors.phone ? "Phone Number" : "Phone Number"}
            className={`contactInput ${errors.phone && "error"}`}
          />

          {/* Email*/}
          <input
            type="email"
            {...register("email", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              required: true,
            })}
            placeholder={!errors.email ? "Email Address" : "Email Address"}
            className={`contactInput ${errors.email && "error"}`}
          />

          {/* Subject */}
          <input
            type="text"
            {...register("subject", { required: true })}
            placeholder={!errors.subject ? "Subject" : "Subject"}
            className={`contactInput ${errors.subject && "error"}`}
          />

          {/* Message */}
          <textarea
            type="text"
            {...register("message", { required: true })}
            placeholder={!errors.message ? "Message" : "Message"}
            className={`contactInput ${errors.message && "error"}`}
          />
          <button className="mainButton">Submit</button>
        </form>
      </motion.div>

      <div className="sectionEnding" />
    </>
  );
};

export default Contact;
