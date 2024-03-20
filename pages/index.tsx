// components
import AboutComponent from "@/components/Home/Sections/About/About";
import ContactComponent from "@/components/Home/Sections/Contact/Contact";
import HeroComponent from "@/components/Home/Sections/Hero/Hero";
import ProjectComponent from "@/components/Home/Sections/Projects/Projects";
import TestimonialComponent from "@/components/Home/Sections/Testimonials/Testimonials";
import TimelineComponent from "@/components/Home/Sections/Timeline/Timeline";

// utils
import styles from "@/styles/pages/Home.module.scss";
import db from "@/utils/db";
import Head from "next/head";

// models
import About from "@/models/About";
import Project from "@/models/Projects";
import Testimonial from "@/models/Testimonial";
import Timeline from "@/models/Timeline";

const Home = ({
    projects,
    testimonials,
    abouts,
    timeline,
}: {
    projects: (typeof Project)[];
    testimonials: (typeof Testimonial)[];
    abouts: (typeof About)[];
    timeline: (typeof Timeline)[];
}) => {
    return (
        <div>
            <Head>
                <title>Francisco Sabino | Front-End Developer Portfolio</title>
                <meta charSet="utf-8" />
                <meta
                    name="author"
                    content="Francisco Sabino"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />

                <meta
                    name="description"
                    content="Explore the portfolio of Francisco Sabino, a front-end developer based in Stockholm, known for creating visually stunning and interactive web experiences."
                />
                <meta
                    name="keywords"
                    content="HTML, CSS, JavaScript, React, NextJs"
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

                <AboutComponent abouts={abouts} />
            </section>

            <section id="timeline">
                <div className={styles.header}>
                    <h2>Timeline</h2>
                    <h2>Timeline</h2>
                </div>

                <TimelineComponent timeline={timeline} />
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
        const abouts = await About.find({});
        const timeline = await Timeline.find({});

        return {
            props: {
                projects: JSON.parse(JSON.stringify(projects)),
                testimonials: JSON.parse(JSON.stringify(testimonials)),
                abouts: JSON.parse(JSON.stringify(abouts)),
                timeline: JSON.parse(JSON.stringify(timeline)),
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
        };
    }
}
