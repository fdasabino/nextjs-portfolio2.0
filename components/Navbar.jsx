import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Squash as Hamburger } from "hamburger-react";
import { Drawer } from "antd";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 5000, velocity: -200 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="navbarStyles">
      <div className="flex items-center justify-between">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex items-center justify-between py-3 md:py-5 md:block"
        >
          <div className="flex gap-4 justify-evenly">
            <a
              className="text-2xl text-gray-600  hover:text-teal-500"
              href="https://github.com/fdasabino"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className="text-2xl text-gray-600  hover:text-teal-500"
              href="https://www.linkedin.com/in/francisco-sabino/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <Hamburger
            toggled={open}
            toggle={showDrawer}
            duration={0.8}
            color={open ? "#4b5563ac" : "#14b7a5"}
          />
        </motion.div>
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        width={"fit-content"}
        bodyStyle={{ backgroundColor: "#334155be" }}
        headerStyle={{ backgroundColor: "#334155be", border: "none" }}
        maskStyle={{
          backgroundColor: "rgba( 0, 0, 0, 0.65)",
          backdropFilter: "blur( 16px )",
        }}
      >
        <div className="flex flex-col items-start justify-center gap-6">
          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="hero" onClick={onClose} className="menuLinks">
              Home
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="about" onClick={onClose} className="menuLinks">
              About
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="projects" onClick={onClose} className="menuLinks">
              Projects
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              spy={true}
              isDynamic={true}
              to="testimonials"
              onClick={onClose}
              className="menuLinks"
            >
              Testimonials
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="contact" onClick={onClose} className="menuLinks">
              Contact
            </Link>
          </motion.div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
