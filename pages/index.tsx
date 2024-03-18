// components
import AboutComponent from "@/components/Home/Sections/About/About";
import ContactComponent from "@/components/Home/Sections/Contact/Contact";
import HeroComponent from "@/components/Home/Sections/Hero/Hero";
import ProjectComponent from "@/components/Home/Sections/Projects/Projects";
import TestimonialComponent from "@/components/Home/Sections/Testimonials/Testimonials";

// utils
import styles from "@/styles/pages/Home.module.scss";
import db from "@/utils/db";
import Head from "next/head";

// models
import Project from "@/models/Projects";
import Testimonial from "@/models/Testimonial";

const Home = ({
    projects,
    testimonials,
}: {
    projects: (typeof Project)[];
    testimonials: (typeof Testimonial)[];
}) => {
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
                <HeroComponent />
            </section>

            <section id="about">
                <div className={styles.header}>
                    <h2>About</h2>
                    <h2>About</h2>
                </div>

                <AboutComponent />
            </section>

            <section id="projects">
                <div className={styles.header}>
                    <h2>Projects</h2>
                    <h2>Projects</h2>
                </div>

                <ProjectComponent projects={projects} />
            </section>

            <section id="testimonials">
                <div className={styles.header}>
                    <h2>References</h2>
                    <h2>References</h2>
                </div>

                <TestimonialComponent testimonials={testimonials} />
            </section>

            <section id="contact">
                <div className={styles.header}>
                    <h2>Contact</h2>
                    <h2>Contact</h2>
                </div>

                <ContactComponent />
            </section>
        </div>
    );
};

export default Home;

export async function getServerSideProps() {
    await db.connectDB();

    try {
        const projects = await Project.find({});
        const testimonials = await Testimonial.find({});

        return {
            props: {
                projects: JSON.parse(JSON.stringify(projects)),
                testimonials: JSON.parse(JSON.stringify(testimonials)),
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
        };
    }
}
