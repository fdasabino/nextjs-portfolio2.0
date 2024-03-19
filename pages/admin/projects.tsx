import ProjectCard from "@/components/Admin/Edit/ProjectCard/ProjectCard";
import Project from "@/models/Projects";
import styles from "@/styles/pages/Projects.module.scss";
import { ProjectProps } from "@/types/types";
import db from "@/utils/db";
import { Tooltip } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { FaCircleChevronLeft } from "react-icons/fa6";

const ManageProjects = ({ projects }: { projects: any }) => {
    const router = useRouter();

    return (
        <section className={styles.edit__projects}>
            <div className={styles.edit__projects__header}>
                <h2>
                    <Tooltip
                        placement="top"
                        title="Go back">
                        <span>
                            {" "}
                            <FaCircleChevronLeft onClick={() => router.push("/admin/dashboard")} />
                        </span>
                    </Tooltip>{" "}
                    Manage Projects
                </h2>
            </div>
            <div className={styles.edit__projects__body}>
                {projects.map((project: ProjectProps) => (
                    <ProjectCard
                        key={project._id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
};

export default ManageProjects;

export async function getServerSideProps() {
    await db.connectDB();

    try {
        const projects = await Project.find({});
        return {
            props: {
                projects: JSON.parse(JSON.stringify(projects)),
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
        };
    }
}
