import Button from "@/components/Layout/Button/Button";
import styles from "@/styles/pages/Dashboard.module.scss";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiKakaoTalkLine, RiMessage2Line } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";

import About from "@/components/Admin/About/About";
import Projects from "@/components/Admin/Projects/Projects";
import Testimonials from "@/components/Admin/Testimonials/Testimonials";

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
                <div className={styles.dashboard__action}>
                    <div
                        className={`${styles.dashboard__action__card} ${styles.base_blurry_background}`}>
                        <div className={styles.dashboard__action__card__top}>
                            <h2>
                                About <RiMessage2Line />
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                soluta laboriosam ducimus assumenda modi hic, doloribus quae rerum
                                corrupti voluptatum!
                            </p>
                        </div>
                        <div className={styles.dashboard__action__card__bottom}>
                            <Button
                                onClick={() => handleSwitch(1)}
                                style="primary">
                                About <CiCirclePlus />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.dashboard__action}>
                    <div
                        className={`${styles.dashboard__action__card} ${styles.base_blurry_background}`}>
                        <div className={styles.dashboard__action__card__top}>
                            <h2>
                                Project <TfiRulerAlt2 />
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                soluta laboriosam ducimus assumenda modi hic, doloribus quae rerum
                                corrupti voluptatum!
                            </p>
                        </div>
                        <div className={styles.dashboard__action__card__bottom}>
                            <Button
                                onClick={() => handleSwitch(2)}
                                style="secondary">
                                Project <CiCirclePlus />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.dashboard__action}>
                    <div
                        className={`${styles.dashboard__action__card} ${styles.base_blurry_background}`}>
                        <div className={styles.dashboard__action__card__top}>
                            <h2>
                                Testimonial <RiKakaoTalkLine />
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                soluta laboriosam ducimus assumenda modi hic, doloribus quae rerum
                                corrupti voluptatum!
                            </p>
                        </div>
                        <div className={styles.dashboard__action__card__bottom}>
                            <Button
                                onClick={() => handleSwitch(3)}
                                style="tertiary">
                                Testimonial <CiCirclePlus />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.dashboard__forms}>
                {active === 1 && <About setActive={setActive} />}
                {active === 2 && <Projects setActive={setActive} />}
                {active === 3 && <Testimonials setActive={setActive} />}
            </div>
        </div>
    );
};

export default AdminDashboard;
