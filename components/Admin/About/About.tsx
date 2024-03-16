import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import { aboutValidation } from "@/utils/aboutValidation";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdHideSource } from "react-icons/md";
import styles from "./About.module.scss";

const initialValues = {
    description: "",
    image: "",
    year: "",
    year_description: "",
};

const About = ({ setActive }: React.PropsWithChildren<{ setActive: (active: number) => void }>) => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialValues);
    const { description, image, year, year_description } = values || initialValues;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (values: any, formikHelpers: any) => {};

    return (
        <div className={styles.admin__about}>
            <>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <h2>
                            Enter about information <MdHideSource onClick={() => setActive(0)} />
                        </h2>
                        <Formik
                            enableReinitialize
                            initialValues={{ description, image, year, year_description }}
                            validationSchema={aboutValidation}
                            onSubmit={handleSubmit}>
                            {(form) => (
                                <Form>
                                    <Input
                                        type="textarea"
                                        icon="message"
                                        name="description"
                                        placeholder="Write about yourself"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        icon="image"
                                        name="image"
                                        placeholder="Paste image url"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        icon="year"
                                        name="year"
                                        placeholder="Year: example: 2021"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        icon="message"
                                        name="year_description"
                                        placeholder="Year description"
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

export default About;
