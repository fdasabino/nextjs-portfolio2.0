import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Head>
        <title>Francisco Sabino - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Front End Developer - Stockholm" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs" />
        <meta name="author" content="Francisco Sabino" />
      </Head>
      <main className="mainContainer">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="tech">
          <Technologies />
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
      </main>
      <Footer />
    </div>
  );
}
