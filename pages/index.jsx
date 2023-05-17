import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";
import Hero from "../components/Sections/Hero";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Testimonials from "../components/Sections/Testimonials";
import Contact from "../components/Sections/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Francisco Sabino - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="description" content="Front End Developer - Stockholm" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs" />
        <meta name="author" content="Francisco Sabino" />
      </Head>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
