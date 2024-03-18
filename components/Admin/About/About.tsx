import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import { aboutValidation } from "@/utils/formsValidation";
import { createAbout, scrollToTop } from "@/utils/globalFunctions";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import styles from "./About.module.scss";

const initialValues = {
    description: "",
    image: "",
};

const About = ({ setActive }: React.PropsWithChildren<{ setActive: (active: number) => void }>) => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialValues);
    const { description, image } = values || initialValues;
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (values: any, formikHelpers: any) => {
        setLoading(true);
        try {
            const { description, image } = values;
            const about = { description, image };

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
                        <h2 id="about">
                            Enter about information{" "}
                            {isMobile && (
                                <FaRegEyeSlash
                                    onClick={() => {
                                        scrollToTop();
                                        setActive(0);
                                    }}
                                />
                            )}
                        </h2>
                        <Formik
                            enableReinitialize
                            initialValues={{ description, image }}
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
