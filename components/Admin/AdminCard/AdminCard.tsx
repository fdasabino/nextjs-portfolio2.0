import Button from "@/components/Layout/Button/Button";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";
import styles from "./AdminCard.module.scss";

const AdminCard = ({
    handleSwitch,
    title,
    active,
}: {
    handleSwitch: (item: number) => void;
    title: string;
    active: number;
}) => {
    return (
        <div className={styles.admin__card}>
            <div className={`${styles.admin__card__card} ${styles.base_blurry_background}`}>
                <div className={styles.admin__card__card__top}>
                    <h2>
                        {title} <RiMessage2Line />
                    </h2>
                </div>
                <div className={styles.admin__card__card__bottom}>
                    <Button
                        onClick={() => handleSwitch(active)}
                        style="secondary">
                        {title} <CiCirclePlus />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AdminCard;
