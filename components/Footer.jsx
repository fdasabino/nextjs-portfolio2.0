import React from "react";
import { Link } from "react-scroll/modules";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="p-5 bg-gray-600">
      <div className="flex justify-evenly items-center">
        <div className="flex gap-1 text-center flex-wrap">
          <div className="px-5 text-center mx-auto">
            <p className="max-w-md text-center uppercase text-gray-800 text-sm md:text-md ">
              Share this page on:
            </p>
            <div className="flex justify-center">
              <FacebookShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <FacebookIcon
                  className="mx-3"
                  size={36}
                  bgStyle={{ fill: "#0F172A" }}
                  round={true}
                  iconFillColor="#14b7a5"
                />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <TwitterIcon
                  className="mx-3"
                  size={36}
                  bgStyle={{ fill: "#0F172A" }}
                  round={true}
                  iconFillColor="#14b7a5"
                />
              </TwitterShareButton>
              <WhatsappShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <WhatsappIcon
                  className="mx-3"
                  size={36}
                  bgStyle={{ fill: "#0F172A" }}
                  round={true}
                  iconFillColor="#14b7a5"
                />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <LinkedinIcon
                  className="mx-3"
                  size={36}
                  bgStyle={{ fill: "#0F172A" }}
                  round={true}
                  iconFillColor="#14b7a5"
                />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center my-2">
              <a
                href="https://drive.google.com/file/d/1MkdpQyCuzjau0eY6w5FaLQzbmfzhqrYV/view"
                target="_blank"
                rel="noopener noreferrer"
                className="footerLink mb-2 uppercase "
              >
                Download my CV
              </a>
              <br />
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; <br /> Francisco Sabino | All Rights Reserved
            </p>
          </div>

          <div className="flex justify-center items-center mx-auto gap-3">
            <div className="flex flex-col items-center px-5">
              <a className="footerLink flex" href="tel:+46762416529">
                +46762416529
              </a>

              <a className="footerLink flex" href="mailto:fdasabino@gmail.com">
                fdasabino@gmail.com
              </a>
            </div>

            <div className="flex justify-center gap-3">
              <div className="">
                <Link className="footerLink" to="hero">
                  Home
                </Link>
                <br />
                <Link className="footerLink" to="about">
                  About
                </Link>
                <br />
                <Link className="footerLink" to="tech">
                  Technologies
                </Link>
                <br />
                <Link className="footerLink" to="projects">
                  Projects
                </Link>
                <br />
                <Link className="footerLink" to="testimonials">
                  Testimonials
                </Link>
                <br />
                <Link className="footerLink" to="contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
