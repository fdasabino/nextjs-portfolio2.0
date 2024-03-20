import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import { TimelineProps } from "@/types/types";
import { testimonialValidation, timelineValidation } from "@/utils/formsValidation";
import { deleteTimeline, updateTimeline } from "@/utils/globalFunctions";
import { Modal, Tooltip } from "antd";
import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiWarning } from "react-icons/ci";
import { FaRegEdit, FaTimes, FaTrashAlt } from "react-icons/fa";
import styles from "./TimelineCard.module.scss";

const TimelineCard = ({ timeline }: { timeline: TimelineProps }) => {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleSubmit = async (values: TimelineProps) => {
        try {
            const updatedTimeline = {
                _id: timeline._id,
                description: values.description,
                year: values.year,
            };

            await updateTimeline(updatedTimeline);

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
            title: "Are you sure you want to delete this timeline item?",
            icon: <CiWarning />,
            okText: "Yes",
            closable: true,
            centered: true,
            maskClosable: true,
            mask: true,
            okType: "danger",
            cancelText: "No",
            onOk: async () => {
                await deleteTimeline(timeline._id);
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
                        title={timeline.description}>
                        <p>{timeline.description.substring(0, 50)}...</p>
                    </Tooltip>
                </div>

                <div className={styles.card__body__item}>
                    <p>{timeline.year}</p>
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
                title="Edit Timeline Item"
                footer={null}>
                <Formik
                    enableReinitialize
                    initialValues={timeline}
                    validationSchema={timelineValidation}
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
                                icon="year"
                                name="year"
                                placeholder="Year"
                            />
                            <Button type="submit">Update timeline</Button>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default TimelineCard;
