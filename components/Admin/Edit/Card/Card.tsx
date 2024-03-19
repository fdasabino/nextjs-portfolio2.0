import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import { ProjectProps } from "@/types/types";
import { projectValidation } from "@/utils/formsValidation";
import { deleteProject, updateProject } from "@/utils/globalFunctions";
import { Modal, Tooltip } from "antd";
import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiWarning } from "react-icons/ci";
import { FaRegEdit, FaTimes, FaTrashAlt } from "react-icons/fa";
import {
    SiAngular,
    SiBootstrap,
    SiCss3,
    SiDocker,
    SiExpress,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiSass,
    SiSelenium,
    SiTailwindcss,
} from "react-icons/si";
import styles from "./Card.module.scss";

const selectIcon = (icon: string) => {
    switch (icon) {
        case "Angular":
            return (
                <SiAngular
                    size={32}
                    color="#fff"
                />
            );
        case "Bootstrap":
            return (
                <SiBootstrap
                    size={32}
                    color="#fff"
                />
            );
        case "CSS":
            return (
                <SiCss3
                    size={32}
                    color="#fff"
                />
            );
        case "Docker":
            return (
                <SiDocker
                    size={32}
                    color="#fff"
                />
            );
        case "Express":
            return (
                <SiExpress
                    size={32}
                    color="#fff"
                />
            );
        case "HTML":
            return (
                <SiHtml5
                    size={32}
                    color="#fff"
                />
            );
        case "JavaScript":
            return (
                <SiJavascript
                    size={32}
                    color="#fff"
                />
            );
        case "MongoDB":
            return (
                <SiMongodb
                    size={32}
                    color="#fff"
                />
            );
        case "Mysql":
            return (
                <SiMysql
                    size={32}
                    color="#fff"
                />
            );
        case "NextJs":
            return (
                <SiNextdotjs
                    size={32}
                    color="#fff"
                />
            );
        case "React":
            return (
                <SiReact
                    size={32}
                    color="#fff"
                />
            );
        case "NodeJS":
            return (
                <SiNodedotjs
                    size={32}
                    color="#fff"
                />
            );
        case "Redux":
            return (
                <SiRedux
                    size={32}
                    color="#fff"
                />
            );
        case "SASS":
            return (
                <SiSass
                    size={32}
                    color="#fff"
                />
            );
        case "Selenium":
            return (
                <SiSelenium
                    size={32}
                    color="#fff"
                />
            );
        case "TailwindCSS":
            return (
                <SiTailwindcss
                    size={32}
                    color="#fff"
                />
            );
    }
};

const Card = ({ project }: { project: ProjectProps }) => {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleSubmit = async (values: ProjectProps) => {
        try {
            const updatedProject = {
                _id: project._id,
                name: values.name,
                description: values.description,
                image: values.image,
                techTags: values.techTags,
                repository: values.repository,
                live_url: values.live_url,
            };
            await updateProject(updatedProject);

            setShowEditModal(false);
            toast.success("Project updated successfully");

            setTimeout(() => {
                window.location.reload();
            }, 500);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    const openDeleteModal = () => {
        Modal.confirm({
            title: "Are you sure you want to delete this project?",
            icon: <CiWarning />,
            okText: "Yes",
            closable: true,
            centered: true,
            maskClosable: true,
            mask: true,
            okType: "danger",
            cancelText: "No",
            onOk: async () => {
                await deleteProject(project._id);
                window.location.reload();
            },
        });
    };

    return (
        <div className={`${styles.card} ${styles.base_blurry_background}`}>
            <div className={styles.card__header}>
                <h2>
                    {project.name.length > 20
                        ? `${project.name.substring(0, 20)}...`
                        : project.name}
                </h2>
                <div className={styles.card__header__icons}>
                    {project.techTags?.map((icon: string, index: number) => {
                        return <span key={index}>{selectIcon(icon)}</span>;
                    })}
                </div>
            </div>
            <div className={styles.card__body}>
                <div className={styles.card__body__item}>
                    <Image
                        width={500}
                        height={500}
                        src={project.image}
                        alt={project.name}
                    />
                </div>
                <div className={styles.card__body__item}>
                    <Tooltip
                        placement="top"
                        title={project.description}>
                        <p>Hover for description</p>
                    </Tooltip>
                </div>
                <div className={styles.card__body__item}>
                    <Tooltip
                        placement="top"
                        title={project.repository}>
                        <a
                            href={project.repository}
                            target="_blank"
                            rel="noreferrer">
                            Source
                        </a>
                    </Tooltip>

                    <Tooltip
                        placement="top"
                        title={project.live_url}>
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noreferrer">
                            Live Project
                        </a>
                    </Tooltip>
                </div>
            </div>
            <div className={styles.card__ctas}>
                <div className={styles.card__ctas__item}>
                    <Tooltip
                        placement="top"
                        title="Delete item">
                        <span>
                            <FaTrashAlt onClick={openDeleteModal} />
                        </span>
                    </Tooltip>
                </div>

                <div className={styles.card__ctas__item}>
                    <Tooltip
                        placement="top"
                        title="Edit item">
                        <span>
                            <FaRegEdit onClick={() => setShowEditModal(true)} />
                        </span>
                    </Tooltip>
                </div>
            </div>
            <Modal
                closable={true}
                centered={true}
                maskClosable={true}
                mask={true}
                closeIcon={<FaTimes />}
                onCancel={() => setShowEditModal(false)}
                open={showEditModal}
                title="Edit project"
                footer={null}>
                <Formik
                    enableReinitialize
                    initialValues={project}
                    validationSchema={projectValidation}
                    onSubmit={handleSubmit}>
                    {(form) => (
                        <Form>
                            <Input
                                type="text"
                                icon="project"
                                name="name"
                                placeholder="Project name"
                            />
                            <Input
                                type="textarea"
                                icon="message"
                                name="description"
                                placeholder="About the project..."
                            />
                            <Input
                                type="text"
                                icon="image"
                                name="image"
                                placeholder="Image url"
                            />
                            <Input
                                type="text"
                                icon="tags"
                                name="techTags"
                                placeholder="Example: React, Node, Express"
                            />
                            <Input
                                type="text"
                                icon="repository"
                                name="repository"
                                placeholder="Repository url"
                            />
                            <Input
                                type="text"
                                icon="live_url"
                                name="live_url"
                                placeholder="Live url"
                            />
                            <Button type="submit">Update Project</Button>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default Card;
