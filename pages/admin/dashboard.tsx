import About from "@/components/Admin/Create/About/About";
import AdminCard from "@/components/Admin/Create/AdminCard/AdminCard";
import Projects from "@/components/Admin/Create/Projects/Projects";
import Testimonials from "@/components/Admin/Create/Testimonials/Testimonials";
import Timeline from "@/components/Admin/Create/Timeline/Timeline";
import styles from "@/styles/pages/Dashboard.module.scss";
import { scrollToId } from "@/utils/globalFunctions";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const AdminDashboard = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
    const [active, setActive] = useState(1);
    const [border, setBorder] = useState(1);

    const handleSwitch = (item: number) => {
        setActive(item);
        setBorder(item);
    };

    useEffect(() => {
        if (isMobile) {
            setActive(0);
            setBorder(0);
        } else {
            setActive(1);
            setBorder(1);
        }
    }, [isMobile]);

    const renderHeadTags = () => {
        return (
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
            </Head>
        );
    };

    return (
        <div className={styles.dashboard}>
            {renderHeadTags()}
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
                        border={border}
                    />

                    <AdminCard
                        scrollToId={scrollToId}
                        handleSwitch={handleSwitch}
                        title="Timeline"
                        id="timeline"
                        active={2}
                        border={border}
                    />
                    <AdminCard
                        scrollToId={scrollToId}
                        handleSwitch={handleSwitch}
                        title="Project"
                        id="project"
                        active={3}
                        border={border}
                    />
                    <AdminCard
                        scrollToId={scrollToId}
                        handleSwitch={handleSwitch}
                        title="Reference"
                        id="reference"
                        active={4}
                        border={border}
                    />
                </div>
                <div className={styles.dashboard__actions__bottom}>
                    {active !== 0 && (
                        <div className={styles.dashboard__forms}>
                            {active === 1 && (
                                <About
                                    setActive={setActive}
                                    setBorder={setBorder}
                                />
                            )}
                            {active === 2 && (
                                <Timeline
                                    setActive={setActive}
                                    setBorder={setBorder}
                                />
                            )}
                            {active === 3 && (
                                <Projects
                                    setActive={setActive}
                                    setBorder={setBorder}
                                />
                            )}
                            {active === 4 && (
                                <Testimonials
                                    setActive={setActive}
                                    setBorder={setBorder}
                                />
                            )}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;
