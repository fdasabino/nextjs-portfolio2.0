import About from "@/components/Admin/About/About";
import AdminCard from "@/components/Admin/AdminCard/AdminCard";
import Projects from "@/components/Admin/Projects/Projects";
import Testimonials from "@/components/Admin/Testimonials/Testimonials";
import Timeline from "@/components/Admin/Timeline/Timeline";
import styles from "@/styles/pages/Dashboard.module.scss";
import { scrollToId } from "@/utils/globalFunctions";
import Head from "next/head";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const AdminDashboard = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
    const [active, setActive] = useState(isMobile ? 0 : 1);

    const handleSwitch = (item: number) => {
        setActive(item);
    };

    return (
        <div className={styles.dashboard}>
            <Head>
                <title>Francisco Sabino - Dashboard</title>
                <meta charSet="utf-8" />
            </Head>
            <div className={styles.dashboard__header}>
                <h1>Dashboard</h1>
            </div>

            <section className={styles.dashboard__actions}>
                <div className={styles.dashboard__actions__top}>
                    <AdminCard
                        scrollToId={scrollToId}
                        handleSwitch={handleSwitch}
                        title="About"
                        id="about"
                        active={1}
                    />

                    <AdminCard
                        scrollToId={scrollToId}
                        handleSwitch={handleSwitch}
                        title="Timeline"
                        id="timeline"
                        active={2}
                    />
                    <AdminCard
                        scrollToId={scrollToId}
                        handleSwitch={handleSwitch}
                        title="Project"
                        id="project"
                        active={3}
                    />
                    <AdminCard
                        scrollToId={scrollToId}
                        handleSwitch={handleSwitch}
                        title="Reference"
                        id="reference"
                        active={4}
                    />
                </div>
                <div className={styles.dashboard__actions__bottom}>
                    {active !== 0 && (
                        <div className={styles.dashboard__forms}>
                            {active === 1 && <About setActive={setActive} />}
                            {active === 2 && <Timeline setActive={setActive} />}
                            {active === 3 && <Projects setActive={setActive} />}
                            {active === 4 && <Testimonials setActive={setActive} />}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;
