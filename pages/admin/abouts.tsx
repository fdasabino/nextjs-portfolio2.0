import AboutCard from "@/components/Admin/Edit/AboutCard/AboutCard";
import About from "@/models/About";
import styles from "@/styles/pages/Abouts.module.scss";
import { AboutProps } from "@/types/types";
import db from "@/utils/db";
import { Tooltip } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

const ManageAbouts = ({ abouts }: { abouts: any }) => {
    console.log(abouts);
    const router = useRouter();
    const renderHeadTags = () => {
        return (
            <Head>
                <meta charSet="utf-8" />
                <title>Manage About</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
            </Head>
        );
    };
    return (
        <>
            {renderHeadTags()}
            <section className={styles.edit__abouts}>
                <div className={styles.edit__abouts__header}>
                    <h2>
                        <Tooltip
                            placement="top"
                            title="Go back">
                            <span>
                                {" "}
                                <FaCircleChevronLeft
                                    onClick={() => router.push("/admin/dashboard")}
                                />
                            </span>
                        </Tooltip>{" "}
                        Manage About
                    </h2>
                </div>
                <div className={styles.edit__abouts__body}>
                    {abouts.map((about: AboutProps) => (
                        <div key={about._id}>
                            <AboutCard about={about} />
                        </div>
                    ))}
                </div>
            </section>
            ;
        </>
    );
};

export default ManageAbouts;

export async function getServerSideProps() {
    await db.connectDB();
    try {
        const abouts = await About.find({});
        return {
            props: {
                abouts: JSON.parse(JSON.stringify(abouts)),
            },
        };
    } catch (error) {
        console.log(error);

        return {
            props: {},
        };
    }
}
