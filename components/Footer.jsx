import React from "react";
import { Link } from "react-scroll/modules";
import { BsTelephoneForward, BsFillPinMapFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

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
        <div className="flex gap-10 text-center flex-wrap">
          <div className="flex flex-col px-5 mx-auto">
            <div className="flex justify-start gap-5">
              <BsTelephoneForward size={24} />
              <a className="footerLink flex" href="tel:+46762416529">
                +46762416529
              </a>
            </div>

            <div className="flex justify-start gap-5">
              <MdOutlineAlternateEmail size={24} />
              <a className="footerLink flex" href="mailto:fdasabino@gmail.com">
                fdasabino@gmail.com
              </a>
            </div>
          </div>
          <div className="px-5 text-center mx-auto">
            <div className="flex justify-center">
              <FacebookShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>

              <TwitterShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <WhatsappShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <LinkedinShareButton
                url={"https://franciscosabino.com"}
                quote={"Fullstack Developer"}
                hashtag="#fullstack"
              >
                <LinkedinIcon className="mx-3" size={36} />
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

          <div className="px-5 text-center mx-auto">
            <div className="flex gap-3">
              <div className="col-span-6">
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
              </div>
              <div className="col-span-6">
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
