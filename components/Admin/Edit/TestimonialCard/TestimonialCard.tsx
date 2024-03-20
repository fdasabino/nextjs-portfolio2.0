import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import { TestimonialProps } from "@/types/types";
import { testimonialValidation } from "@/utils/formsValidation";
import { deleteTestimonial, updateTestimonial } from "@/utils/globalFunctions";
import { Modal, Tooltip } from "antd";
import { Form, Formik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiWarning } from "react-icons/ci";
import { FaRegEdit, FaTimes, FaTrashAlt } from "react-icons/fa";
import styles from "./TestimonialCard.module.scss";

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleSubmit = async (values: TestimonialProps) => {
        try {
            const updatedTestimonial = {
                _id: testimonial._id,
                name: values.name,
                description: values.description,
                image: values.image,
                workplace: values.workplace,
                position: values.position,
            };
            await updateTestimonial(updatedTestimonial);

            setShowEditModal(false);
            toast.success("Reference updated successfully");

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
            title: "Are you sure you want to delete this reference?",
            icon: <CiWarning />,
            okText: "Yes",
            closable: true,
            centered: true,
            maskClosable: true,
            mask: true,
            okType: "danger",
            cancelText: "No",
            onOk: async () => {
                await deleteTestimonial(testimonial._id);
                window.location.reload();
            },
        });
    };

    return (
        <div className={`${styles.card} ${styles.base_blurry_background}`}>
            <div className={styles.card__header}>
                <h2>{testimonial.name}</h2>
            </div>
            <div className={styles.card__body}>
                <div className={styles.card__body__item}>
                    <Image
                        width={500}
                        height={500}
                        src={testimonial.image}
                        alt={testimonial.name}
                    />
                </div>
                <div className={styles.card__body__item}>
                    <Tooltip
                        trigger="click"
                        placement="top"
                        title={testimonial.description}>
                        <p>{testimonial.description.substring(0, 200)}...</p>
                    </Tooltip>
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
                title="Edit reference"
                footer={null}>
                <Formik
                    enableReinitialize
                    initialValues={testimonial}
                    validationSchema={testimonialValidation}
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
                                placeholder="About the testimonial..."
                            />
                            <Input
                                type="text"
                                icon="image"
                                name="image"
                                placeholder="Image url"
                            />
                            <Input
                                type="text"
                                icon="repository"
                                name="position"
                                placeholder="Position"
                            />
                            <Input
                                type="text"
                                icon="live_url"
                                name="workplace"
                                placeholder="Workplace"
                            />
                            <Button type="submit">Update reference</Button>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
};

export default TestimonialCard;
