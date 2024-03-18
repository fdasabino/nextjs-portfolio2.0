import { Tooltip } from "antd";
import React from "react";
import {
    FaFacebookF,
    FaLink,
    FaLinkedin,
    FaRegEnvelope,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll/modules";
import { Simplesharer } from "simple-sharer";
import styles from "./Footer.module.scss";

const Footer = () => {
    const sh = new Simplesharer();
    sh.url = "https://franciscosabino.vercel.app/";
    sh.title = "Francisco Sabino - Portfolio";
    sh.text = "Front End Developer - Stockholm";
    sh.hashtags = ["HTML", "CSS", "JavaScript", "React", "NextJs"];

    return (
        <div className={`${styles.footer} ${styles.base_blurry_background}`}>
            <div className={styles.footer__socials}>
                <p>Share my page on:</p>
                <div className={styles.footer__socials_items}>
                    <Tooltip title="Share on Facebook">
                        <button onClick={() => sh.facebook()}>
                            <FaFacebookF />
                        </button>
                    </Tooltip>

                    <Tooltip title="Share on Twitter">
                        <button onClick={() => sh.twitter()}>
                            <FaTwitter />
                        </button>
                    </Tooltip>

                    <Tooltip title="Share on WhatsApp">
                        <button onClick={() => sh.whatsapp()}>
                            <FaWhatsapp />
                        </button>
                    </Tooltip>

                    <Tooltip title="Share on Linkedin">
                        <button onClick={() => sh.linkedin()}>
                            <FaLinkedin />
                        </button>
                    </Tooltip>

                    <Tooltip title="Copy Link">
                        <button onClick={() => sh.copy()}>
                            <FaLink />
                        </button>
                    </Tooltip>
                </div>
            </div>

            <div className={styles.footer__email}>
                <a href="mailto:fdasabino@gmail.com">
                    <FaRegEnvelope />
                    fdasabino@gmail.com
                </a>
            </div>

            <div className={styles.footer__links}>
                <div className={styles.footer__links_wrapper}>
                    <Link to="hero">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="timeline">Timeline</Link>
                    <Link to="tech">Technologies</Link>
                </div>

                <div className={styles.footer__links_wrapper}>
                    <Link to="projects">Projects</Link>
                    <Link to="testimonials">References</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
