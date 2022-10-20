import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Spin as Hamburger } from "hamburger-react";
import { Drawer } from "antd";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-opacity-40 backdrop-blur-sm rounded drop-shadow-md z-50">
      <div className="flex justify-between items-center">
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
          <div className="flex justify-evenly gap-4">
            <a
              className=" text-gray-600 text-2xl hover:text-teal-500"
              href="https://github.com/fdasabino"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
            <a
              className=" text-gray-600 text-2xl hover:text-teal-500"
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
          <Hamburger toggled={open} toggle={showDrawer} duration={0.8} color="#13aa9b" />
        </motion.div>
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        width={"fit-content"}
        bodyStyle={{ backgroundColor: "#334155be" }}
        headerStyle={{ backgroundColor: "#334155be", border: "none" }}
      >
        <div className="flex flex-col justify-center items-start gap-6">
          <Link spy={true} isDynamic={true} to="hero" onClick={onClose} className="menuLinks">
            Home
          </Link>
          <Link spy={true} isDynamic={true} to="about" onClick={onClose} className="menuLinks">
            About
          </Link>
          <Link spy={true} isDynamic={true} to="tech" onClick={onClose} className="menuLinks">
            Technologies
          </Link>
          <Link spy={true} isDynamic={true} to="projects" onClick={onClose} className="menuLinks">
            Projects
          </Link>
          <Link spy={true} isDynamic={true} to="testimonials" onClick={onClose} className="menuLinks">
            Testimonials
          </Link>
          <Link spy={true} isDynamic={true} to="contact" onClick={onClose} className="menuLinks">
            Contact
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
