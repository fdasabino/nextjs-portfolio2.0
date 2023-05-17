import React from "react";
import Navbar from "./Navbar";
import Animation from "./Animation";
import Footer from "./Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative wrapper">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <motion.div
        initial={{
          x: 400,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 0.7,
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="hidden md:block"
      >
        <Animation />
      </motion.div>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* Toaster notifications */}
      <Toaster
        position="top-center"
        reverseOrder={true}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}
