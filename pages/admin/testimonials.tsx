import TestimonialCard from "@/components/Admin/Edit/TestimonialCard/TestimonialCard";
import Testimonial from "@/models/Testimonial";
import styles from "@/styles/pages/Testimonials.module.scss";
import { TestimonialProps } from "@/types/types";
import db from "@/utils/db";
import { Tooltip } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

const ManageTestimonials = ({ testimonials }: { testimonials: any }) => {
    console.log(testimonials);
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
            <section className={styles.edit__projects}>
                <div className={styles.edit__projects__header}>
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
                        Manage References
                    </h2>
                </div>
                <div className={styles.edit__projects__body}>
                    {[...testimonials].reverse().map((testimonial: TestimonialProps) => (
                        <div key={testimonial._id}>
                            <TestimonialCard
                                key={testimonial._id}
                                testimonial={testimonial}
                            />
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
        const testimonials = await Testimonial.find({});
        return {
            props: {
                testimonials: JSON.parse(JSON.stringify(testimonials)),
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
        };
    }
}
