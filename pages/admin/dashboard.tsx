import Button from "@/components/Layout/Button/Button";
import styles from "@/styles/pages/Dashboard.module.scss";
import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiKakaoTalkLine, RiMessage2Line } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";

import About from "@/components/Admin/About/About";
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
                                style="secondary">
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
                                Timeline <RiMessage2Line />
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
                                Timeline <CiCirclePlus />
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
                                onClick={() => handleSwitch(3)}
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
                                Reference <RiKakaoTalkLine />
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                soluta laboriosam ducimus assumenda modi hic, doloribus quae rerum
                                corrupti voluptatum!
                            </p>
                        </div>
                        <div className={styles.dashboard__action__card__bottom}>
                            <Button
                                onClick={() => handleSwitch(4)}
                                style="secondary">
                                Reference <CiCirclePlus />
                            </Button>
                        </div>
                    </div>
                </div>
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
