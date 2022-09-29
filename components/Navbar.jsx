import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-10 mb-12 flex justify-between">
      <h3 className="flex justify-evenly items-center gap-4 text-gray-700 text-2xl md:text-3xl">
        <a href="https://github.com/fdasabino" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/francisco-sabino" target="_blank">
          <BsLinkedin />
        </a>
      </h3>
      <ul className="flex items-center">
        <li>
          <a
            className="bg-gradient-to-t from-cyan-500 to-teal-600 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Link
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
