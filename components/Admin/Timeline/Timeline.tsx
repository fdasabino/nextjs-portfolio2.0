import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import { timelineValidation } from "@/utils/formsValidation";
import { createTimeline, scrollToTop } from "@/utils/globalFunctions";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdHideSource } from "react-icons/md";
import styles from "./Timeline.module.scss";

const initialValues = {
    description: "",
    year: "",
};

const Timeline = ({
    setActive,
}: React.PropsWithChildren<{ setActive: (active: number) => void }>) => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialValues);
    const { description, year } = values || initialValues;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (values: any, formikHelpers: any) => {
        setLoading(true);
        try {
            const { description, year } = values;
            const timeline = { description, year };

            const res = await createTimeline(timeline);
            if (res.data) {
                formikHelpers.resetForm();
                setValues(initialValues);

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
        <div className={styles.admin__timeline}>
            <>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <h2 id="timeline">
                            Enter timeline information{" "}
                            <MdHideSource
                                onClick={() => {
                                    scrollToTop();
                                    setActive(0);
                                }}
                            />
                        </h2>
                        <Formik
                            enableReinitialize
                            initialValues={{ description, year }}
                            validationSchema={timelineValidation}
                            onSubmit={handleSubmit}>
                            {(form) => (
                                <Form>
                                    <Input
                                        type="text"
                                        icon="year"
                                        name="year"
                                        placeholder="Year"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="textarea"
                                        icon="message"
                                        name="description"
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

export default Timeline;
