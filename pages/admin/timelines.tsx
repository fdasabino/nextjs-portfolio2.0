import TimelineCard from "@/components/Admin/Edit/TimelineCard/TimelineCard";
import Timeline from "@/models/Timeline";
import styles from "@/styles/pages/Timelines.module.scss";
import { TimelineProps } from "@/types/types";
import db from "@/utils/db";
import { Tooltip } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

const ManageTestimonials = ({ timelines }: { timelines: any }) => {
    const router = useRouter();
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
        <>
            {renderHeadTags()}
            <section className={styles.edit__timelines}>
                <div className={styles.edit__timelines__header}>
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
                        Manage Timeline
                    </h2>
                </div>
                <div className={styles.edit__timelines__body}>
                    {timelines.map((timeline: TimelineProps) => (
                        <div key={timeline._id}>
                            <TimelineCard timeline={timeline} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ManageTestimonials;

export async function getServerSideProps() {
    await db.connectDB();
    try {
        const timelines = await Timeline.find({});
        return {
            props: {
                timelines: JSON.parse(JSON.stringify(timelines)),
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
        };
    }
}
