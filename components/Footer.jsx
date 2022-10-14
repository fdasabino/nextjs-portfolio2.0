import React from "react";
import { Link } from "react-scroll/modules";
import { Simplesharer } from "simple-sharer";
import { Tooltip } from "antd";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaLink,
  FaPhoneVolume,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const sh = new Simplesharer();
  sh.url = "https://franciscosabino.com/"; //your url
  sh.title = "Francisco Sabino - Portfolio"; //title for reddit, this is optional
  sh.text = "Front End Developer - Stockholm"; // description for twitter, not more than a hundred characters, optional.
  sh.hashtags = ["HTML", "CSS", "JavaScript", "React", "NextJs"]; // a list of hashtags for twitter,also optional

  return (
    <div className="p-5 bg-gray-600">
      <div className="flex justify-evenly items-center">
        <div className="flex gap-5 text-center flex-wrap">
          {/* social icons */}
          <div className="px-5 text-center mx-auto">
            <p className="max-w-md text-center uppercase text-gray-800 text-sm md:text-md ">
              Share my page on:
            </p>
            <div className="flex justify-center">
              <Tooltip title="Share on Facebook">
                <button
                  onClick={() => sh.facebook()}
                  className="w-10 footerSharingSocial"
                >
                  <FaFacebookF />
                </button>
              </Tooltip>

              <Tooltip title="Share on Twitter">
                <button
                  onClick={() => sh.twitter()}
                  className="w-10 footerSharingSocial"
                >
                  <FaTwitter />
                </button>
              </Tooltip>

              <Tooltip title="Share on WhatsApp">
                <button
                  onClick={() => sh.whatsapp()}
                  className="w-10 footerSharingSocial"
                >
                  <FaWhatsapp />
                </button>
              </Tooltip>

              <Tooltip title="Share on Linkedin">
                <button
                  onClick={() => sh.linkedin()}
                  className="w-10 footerSharingSocial"
                >
                  <FaLinkedin />
                </button>
              </Tooltip>

              <Tooltip title="Copy Link">
                <button
                  onClick={() => sh.copy()}
                  className="w-10 footerSharingSocial"
                >
                  <FaLink />
                </button>
              </Tooltip>
            </div>
          </div>

          {/* contact */}
          <div className="flex justify-center items-center mx-auto">
            <div className="flex flex-col items-center px-5">
              <a className="footerLink" href="tel:+46762416529">
                <span className="text-lg">
                  <FaPhoneVolume />
                </span>
                +46762416529
              </a>

              <a className="footerLink" href="mailto:fdasabino@gmail.com">
                <span className="text-lg">
                  <FaRegEnvelope />
                </span>
                fdasabino@gmail.com
              </a>
            </div>
          </div>

          {/* links */}
          <div className="w-full flex justify-center items-center gap-3">
            <div className="flex flex-col items-center">
              <Link className="footerLink" to="hero">
                Home
              </Link>
              <Link className="footerLink" to="about">
                About
              </Link>
              <Link className="footerLink" to="tech">
                Technologies
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <Link className="footerLink" to="projects">
                Projects
              </Link>
              <Link className="footerLink" to="testimonials">
                Testimonials
              </Link>
              <Link className="footerLink" to="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
