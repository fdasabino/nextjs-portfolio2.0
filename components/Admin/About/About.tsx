import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import { aboutValidation } from "@/utils/formsValidation";
import { createAbout } from "@/utils/globalFunctions";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
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

    const handleSubmit = async (values: any, formikHelpers: any) => {
        setLoading(true);
        try {
            const { description, image, year, year_description } = values;
            const timeline = { year, description: year_description }; // Adjusting the structure
            const about = { description, image, timeline };

            const res = await createAbout(about);
            if (res.data) {
                formikHelpers.resetForm();
                setValues(initialValues);
                console.log(res.data);

                toast.success("Item created successfully");
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

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
