import { Drawer } from "antd";
import { motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";

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
    <nav className={styles.navbar}>
      <motion.div
        className={styles.navbar__left}
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
        <a href="https://github.com/fdasabino" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/francisco-sabino/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </motion.div>
      <motion.div
        className={styles.navbar__right}
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
        <Hamburger toggled={open} toggle={showDrawer} duration={0.8} color={"#666"} />
      </motion.div>
      <Drawer
        placement="left"
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
        <div className="">
          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="hero" onClick={onClose} className="">
              Home
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="about" onClick={onClose} className="">
              About
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="projects" onClick={onClose} className="">
              Projects
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="testimonials" onClick={onClose} className="">
              Testimonials
            </Link>
          </motion.div>

          <motion.div variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link spy={true} isDynamic={true} to="contact" onClick={onClose} className="">
              Contact
            </Link>
          </motion.div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
