import Button from "@/components/Layout/Button/Button";
import styles from "@/styles/pages/Dashboard.module.scss";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiKakaoTalkLine, RiMessage2Line } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";

import About from "@/components/Admin/About/About";
import AdminCard from "@/components/Admin/AdminCard/AdminCard";
import Projects from "@/components/Admin/Projects/Projects";
import Testimonials from "@/components/Admin/Testimonials/Testimonials";
import Timeline from "@/components/Admin/Timeline/Timeline";

const AdminDashboard = () => {
    const [active, setActive] = useState(0);

    const handleSwitch = (item: number) => {
        setActive(item);
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__header}>
                <h1>Dashboard</h1>
            </div>

            <div className={styles.dashboard__actions}>
                <AdminCard
                    handleSwitch={handleSwitch}
                    title="About"
                    active={1}
                />

                <AdminCard
                    handleSwitch={handleSwitch}
                    title="Timeline"
                    active={2}
                />
                <AdminCard
                    handleSwitch={handleSwitch}
                    title="Project"
                    active={3}
                />
                <AdminCard
                    handleSwitch={handleSwitch}
                    title="Reference"
                    active={4}
                />
            </div>

            <div className={styles.dashboard__forms}>
                {active === 1 && <About setActive={setActive} />}
                {active === 2 && <Timeline setActive={setActive} />}
                {active === 3 && <Projects setActive={setActive} />}
                {active === 4 && <Testimonials setActive={setActive} />}
            </div>
        </div>
    );
};

export default AdminDashboard;
