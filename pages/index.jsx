import Head from "next/head";
import About from "../components/Sections/About/About";
import Contact from "../components/Sections/Contact/Contact";
import Hero from "../components/Sections/Hero/Hero";
import Projects from "../components/Sections/Projects/Projects";
import Testimonials from "../components/Sections/Testimonials/Testimonials";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Francisco Sabino - Portfolio</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />
                <meta
                    httpEquiv="ScreenOrientation"
                    content="autoRotate:disabled"
                />
                <meta
                    name="description"
                    content="Front End Developer - Stockholm"
                />
                <meta
                    name="keywords"
                    content="HTML, CSS, JavaScript, React, NextJs"
                />
                <meta
                    name="author"
                    content="Francisco Sabino"
                />
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
