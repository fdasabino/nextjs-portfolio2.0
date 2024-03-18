import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import { testimonialValidation } from "@/utils/formsValidation";
import { createTestimonial, scrollToTop } from "@/utils/globalFunctions";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
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
    const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (values: any, formikHelpers: any) => {
        setLoading(true);
        try {
            const { name, description, image, workplace, postion } = values;
            const testimonial = { name, description, image, workplace, position };

            const res = await createTestimonial(testimonial);
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
        <div className={styles.admin__testimonials}>
            <>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <h2 id="reference">
                            Create reference{" "}
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
