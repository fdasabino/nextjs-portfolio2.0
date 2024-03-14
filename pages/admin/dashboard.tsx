import Button from "@/components/Layout/Button/Button";
import styles from "@/styles/pages/Dashboard.module.scss";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiKakaoTalkLine, RiMessage2Line } from "react-icons/ri";
import { TfiRulerAlt2 } from "react-icons/tfi";

const AdminDashboard = () => {
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
                            <Button style="primary">
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
                            <Button style="secondary">
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
                            <Button style="tertiary">
                                Testimonial <CiCirclePlus />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
