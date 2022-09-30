import { Toaster } from "react-hot-toast";
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
  return (
    <div>
      <Head>
        <title>Francisco Sabino - Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Fullstack Developer - Stockholm" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs, Python, Django" />
        <meta name="author" content="Francisco Sabino" />
      </Head>
      <main className="mainContainer">
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
        <Footer />
      </main>
      {/* Toaster notifications */}
      <Toaster
        position="top-center"
        reverseOrder={true}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}
