import Head from "next/head";

import { BsChatText } from "react-icons/bs";
import { PiTextAUnderlineBold } from "react-icons/pi";
import { TbTools } from "react-icons/tb";

import About from "../components/Sections/About/About";
import Contact from "../components/Sections/Contact/Contact";
import Hero from "../components/Sections/Hero/Hero";
import Projects from "../components/Sections/Projects/Projects";
import Testimonials from "../components/Sections/Testimonials/Testimonials";

import { MdOutlineAlternateEmail } from "react-icons/md";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Francisco Sabino - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
        <meta name="description" content="Front End Developer - Stockholm" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs" />
        <meta name="author" content="Francisco Sabino" />
      </Head>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <h3 className={styles.section__title}>
          About <BsChatText />
        </h3>
        <About />
      </section>
      <section id="projects">
        <h3 className={styles.section__title}>
          Projects <TbTools />
        </h3>
        <Projects />
      </section>
      <section id="testimonials">
        <h3 className={styles.section__title}>
          Testimonials <PiTextAUnderlineBold />
        </h3>
        <Testimonials />
      </section>
      <section id="contact">
        <h3 className={styles.section__title}>
          Contact <MdOutlineAlternateEmail />
        </h3>
        <Contact />
      </section>
    </div>
  );
}
