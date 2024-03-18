import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import { projectValidation } from "@/utils/formsValidation";
import { createProject, scrollToTop } from "@/utils/globalFunctions";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegEyeSlash } from "react-icons/fa";
import styles from "./Projects.module.scss";

const initialValues = {
    name: "",
    description: "",
    image: "",
    techTags: "",
    repository: "",
    live_url: "",
};

const Projects = ({
    setActive,
}: React.PropsWithChildren<{ setActive: (active: number) => void }>) => {
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(initialValues);
    const { name, description, image, techTags, repository, live_url } = values || initialValues;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (values: any, formikHelpers: any) => {
        setLoading(true);
        try {
            const { name, description, image, techTags, repository, live_url } = values;
            const project = { name, description, image, techTags, repository, live_url };

            const res = await createProject(project);
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
        <div className={styles.admin__projects}>
            <>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <h2 id="project">
                            Enter project information{" "}
                            <FaRegEyeSlash
                                onClick={() => {
                                    scrollToTop();
                                    setActive(0);
                                }}
                            />
                        </h2>
                        <Formik
                            enableReinitialize
                            initialValues={{
                                name,
                                description,
                                image,
                                techTags,
                                repository,
                                live_url,
                            }}
                            validationSchema={projectValidation}
                            onSubmit={handleSubmit}>
                            {(form) => (
                                <Form>
                                    <Input
                                        type="text"
                                        icon="project"
                                        name="name"
                                        placeholder="Project name"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="textarea"
                                        icon="message"
                                        name="description"
                                        placeholder="About the project..."
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
                                        icon="tags"
                                        name="techTags"
                                        placeholder="Example: React, Node, Express"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        icon="repository"
                                        name="repository"
                                        placeholder="Repository url"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="text"
                                        icon="live_url"
                                        name="live_url"
                                        placeholder="Live url"
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

export default Projects;
