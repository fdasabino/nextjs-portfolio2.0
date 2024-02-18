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
                <div className={styles.header}>
                    <h2>About</h2>
                    <h2>About</h2>
                </div>

                <About />
            </section>

            <section id="projects">
                <div className={styles.header}>
                    <h2>Projects</h2>
                    <h2>Projects</h2>
                </div>

                <Projects />
            </section>

            <section id="testimonials">
                <div className={styles.header}>
                    <h2>Testimonials</h2>
                    <h2>Testimonials</h2>
                </div>

                <Testimonials />
            </section>

            <section id="contact">
                <div className={styles.header}>
                    <h2>Contact</h2>
                    <h2>Contact</h2>
                </div>

                <Contact />
            </section>
        </div>
    );
}
