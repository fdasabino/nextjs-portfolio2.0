import About from "@/components/Home/Sections/About/About";
import Contact from "@/components/Home/Sections/Contact/Contact";
import Hero from "@/components/Home/Sections/Hero/Hero";
import Projects from "@/components/Home/Sections/Projects/Projects";
import Testimonials from "@/components/Home/Sections/Testimonials/Testimonials";
import Project from "@/models/Projects";
import styles from "@/styles/pages/Home.module.scss";
import db from "@/utils/db";
import Head from "next/head";

const Home = ({ projects }: { projects: (typeof Project)[] }) => {
    console.log(projects);
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
                    name="robots"
                    content="index, follow"
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
                    <h2>References</h2>
                    <h2>References</h2>
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
};

export default Home;

export async function getServerSideProps() {
    await db.connectDB();

    try {
        const projects = await Project.find({});
        return {
            props: {
                projects: JSON.parse(JSON.stringify(projects)),
            },
        };
    } catch (error) {}
}
