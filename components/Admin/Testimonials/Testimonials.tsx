import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import { testimonialValidation } from "@/utils/formsValidation";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdHideSource } from "react-icons/md";
import styles from "./Testimonials.module.scss";

const initialValues = {
    name: "",
    description: "",
    image: "",
    workplace: "",
    position: "",
};

const Testimonials = ({
    setActive,
}: React.PropsWithChildren<{ setActive: (active: number) => void }>) => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialValues);
    const { name, description, image, workplace, position } = values || initialValues;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (values: any, formikHelpers: any) => {};

    return (
        <div className={styles.admin__testimonials}>
            <>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <h2>
                            Enter project information <MdHideSource onClick={() => setActive(0)} />
                        </h2>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                name,
                                description,
                                image,
                                workplace,
                                position,
                            }}
                            validationSchema={testimonialValidation}
                            onSubmit={handleSubmit}>
                            {(form) => (
                                <Form>
                                    <Input
                                        type="text"
                                        icon="name"
                                        name="name"
                                        placeholder="Person's name..."
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="textarea"
                                        icon="message"
                                        name="description"
                                        placeholder="Testimonial description..."
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        icon="image"
                                        name="image"
                                        placeholder="Image url"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        icon="workplace"
                                        name="workplace"
                                        placeholder="Workplace..."
                                        onChange={handleChange}
                                    />

                                    <Input
                                        type="text"
                                        icon="position"
                                        name="position"
                                        placeholder="Position..."
                                        onChange={handleChange}
                                    />

                                    <Button
                                        type="submit"
                                        style="primary">
                                        Submit <AiOutlineArrowRight />
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </>
                )}
            </>
        </div>
    );
};

export default Testimonials;
