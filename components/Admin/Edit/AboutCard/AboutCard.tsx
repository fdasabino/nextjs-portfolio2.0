import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import { AboutProps } from "@/types/types";
import { aboutValidation } from "@/utils/formsValidation";
import { deleteTimeline, updateTimeline } from "@/utils/globalFunctions";
import { Modal, Tooltip } from "antd";
import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiWarning } from "react-icons/ci";
import { FaRegEdit, FaTimes, FaTrashAlt } from "react-icons/fa";
import styles from "./AboutCard.module.scss";

const AboutCard = ({ about }: { about: AboutProps }) => {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleSubmit = async (values: AboutProps) => {
        try {
            const updatedAbout = {
                _id: about._id,
                description: values.description,
                image: values.image,
                active: values.active,
            };

            // await updateTimeline(updatedTimeline);

            setShowEditModal(false);
            toast.success("Timeline item updated successfully");

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
            title: "Are you sure you want to delete this about item?",
            icon: <CiWarning />,
            okText: "Yes",
            closable: true,
            centered: true,
            maskClosable: true,
            mask: true,
            okType: "danger",
            cancelText: "No",
            onOk: async () => {
                // await deleteTimeline(about._id);
                window.location.reload();
            },
        });
    };

    return (
        <div className={`${styles.card} ${styles.base_blurry_background}`}>
            <div className={styles.card__body}>
                <div className={styles.card__body__item}>
                    <Tooltip
                        trigger="click"
                        placement="top"
                        title={about.description}>
                        <p>{about.description.substring(0, 50)}...</p>
                    </Tooltip>
                </div>

                <div className={styles.card__body__item}>
                    <Image
                        src={about.image}
                        width={300}
                        height={300}
                        alt="Frank"
                    />
                </div>
            </div>
            <div className={styles.card__ctas}>
                <Tooltip
                    placement="top"
                    title="Delete item">
                    <div className={styles.card__ctas__left}>
                        <Button
                            style="danger"
                            onClick={openDeleteModal}>
                            <FaTrashAlt />
                        </Button>
                    </div>
                </Tooltip>

                <Tooltip
                    placement="top"
                    title="Edit item">
                    <div className={styles.card__ctas__right}>
                        <Button
                            style="primary"
                            onClick={() => setShowEditModal(true)}>
                            <FaRegEdit />
                        </Button>
                    </div>
                </Tooltip>
            </div>
            <Modal
                closable={true}
                centered={true}
                maskClosable={true}
                mask={true}
                closeIcon={<FaTimes />}
                onCancel={() => setShowEditModal(false)}
                open={showEditModal}
                title="Edit About Item"
                footer={null}>
                <Formik
                    enableReinitialize
                    initialValues={about}
                    validationSchema={aboutValidation}
                    onSubmit={handleSubmit}>
                    {(form) => (
                        <Form>
                            <Input
                                type="text"
                                icon="description"
                                name="description"
                                placeholder="Describe event"
                            />
                            <Input
                                type="text"
                                icon="image"
                                name="image"
                                placeholder="Image URL"
                            />
                            <Button type="submit">Update About</Button>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default AboutCard;
