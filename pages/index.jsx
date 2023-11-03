import Head from "next/head";
import About from "../components/Sections/About/About";
import Contact from "../components/Sections/Contact/Contact";
import Hero from "../components/Sections/Hero/Hero";
import Projects from "../components/Sections/Projects/Projects";
import Testimonials from "../components/Sections/Testimonials/Testimonials";
import styles from "../styles/Home.module.scss";

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
                <meta httpEquiv="ScreenOrientation" contentS="autoRotate:disabled" />
                <meta name="description" content="Front End Developer - Stockholm" />
                <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJs" />
                <meta name="author" content="Francisco Sabino" />
            </Head>
            <section id="hero">
                <Hero />
            </section>

            <section id="about">
                <div className={styles.glitch_wrapper}>
                    <div className={styles.glitch} data-text="About">
                        About
                    </div>
                </div>
                <About />
            </section>

            <section id="projects">
                <div className={styles.glitch_wrapper}>
                    <div className={styles.glitch} data-text="Projects">
                        Projects
                    </div>
                </div>
                <Projects />
            </section>

            <section id="testimonials">
                <div className={styles.glitch_wrapper}>
                    <div className={styles.glitch} data-text="Testimonials">
                        Testimonials
                    </div>
                </div>
                <Testimonials />
            </section>

            <section id="contact">
                <div className={styles.glitch_wrapper}>
                    <div className={styles.glitch} data-text="Contact">
                        Contact
                    </div>
                </div>
                <Contact />
            </section>
        </div>
    );
}
