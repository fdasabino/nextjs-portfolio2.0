import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Spin as Hamburger } from "hamburger-react";
import { Button, Drawer } from "antd";
import { Link } from "react-scroll";

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
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="flex justify-evenly gap-4">
            <a
              className=" text-gray-600 text-2xl hover:text-cyan-500"
              href="https://github.com/fdasabino"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a
              className=" text-gray-600 text-2xl hover:text-cyan-500"
              href="https://www.linkedin.com/in/francisco-sabino/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
        <Hamburger toggled={open} toggle={showDrawer} duration={0.8} />
      </div>
      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <div className="flex flex-col justify-center items-center gap-4">
          <Link spy={true} isDynamic={true} to="hero" onClick={onClose}>
            Home
          </Link>
          <Link spy={true} isDynamic={true} to="about" onClick={onClose}>
            About
          </Link>
          <Link spy={true} isDynamic={true} to="tech" onClick={onClose}>
            Technologies
          </Link>
          <Link spy={true} isDynamic={true} to="projects" onClick={onClose}>
            Projects
          </Link>
          <Link spy={true} isDynamic={true} to="testimonials" onClick={onClose}>
            Testimonials
          </Link>
          <Link spy={true} isDynamic={true} to="contact" onClick={onClose}>
            Contact
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
