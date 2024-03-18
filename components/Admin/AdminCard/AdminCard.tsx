import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./AdminCard.module.scss";

const AdminCard = ({
    handleSwitch,
    scrollToId,
    title,
    active,
    id,
}: {
    handleSwitch: (item: number) => void;
    scrollToId: (id: string) => void;
    title: string;
    active: number;
    id: string;
}) => {
    return (
        <div className={`${styles.admin__card} ${styles.base_blurry_background}`}>
            <h2>
                {title}{" "}
                <CiCirclePlus
                    onClick={() => {
                        handleSwitch(active);
                        setTimeout(() => {
                            scrollToId(id);
                        }, 500); // Adjust the delay as needed
                    }}
                />
            </h2>
        </div>
    );
};

export default AdminCard;
