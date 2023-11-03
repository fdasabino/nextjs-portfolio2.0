import emailjs from "@emailjs/browser";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsChevronDoubleUp } from "react-icons/bs";
import * as Yup from "yup";
import { scrollTo } from "../../../utils/globalFunctions";
import Button from "../../Layout/Button/Button";
import Input from "../../Layout/Input/Input";
import styles from "./Contact.module.scss";

const initialValues = {
    name: "",
    email_address: "",
    phone_number: "",
    subject: "",
    message: "",
};

const phoneRegex = /^\+\d{1,4}\s?\d{1,14}$/;

const messageValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email_address: Yup.string().email("Invalid Email").required("Email is required"),
    phone_number: Yup.string()
        .matches(phoneRegex, "Invalid phone number format")
        .required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});

const Contact = () => {
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_USER_ID;

    const [userMessage, setUserMessage] = useState(initialValues);
    const { name, email_address, phone_number, subject, message } = userMessage;

    const handleSubmit = () => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: name,
                phone: phone_number,
                email: email_address,
                subject: subject,
                message: message,
            },
            userID
        );
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserMessage({ ...userMessage, [name]: value });
    };

    const sendEmail = async (serviceID, templateID, variables, userID) => {
        try {
            await emailjs.send(serviceID, templateID, variables, userID);
            toast.success("Message Sent Successfully!!!");
            setUserMessage(initialValues);
        } catch (err) {
            console.error(`Something went wrong ${err}`);
        }
    };

    return (
        <div className={styles.contact}>
            <div className={styles.contact__disclaimer}>
                <h4>
                    Just now, I am looking for projects or collaborations where I can show my skills
                    and learn more. Send me a message if you have something in mind.{" "}
                    <span>Let&apos;s chat!</span>
                </h4>
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.4,
                    delay: 0.1,
                }}
                className={`${styles.contact__form} ${styles.base_blurry_background}`}
            >
                <Formik
                    enableReinitialize
                    initialValues={{ name, email_address, phone_number, subject, message }}
                    validationSchema={messageValidation}
                    onSubmit={handleSubmit}
                >
                    {(form) => (
                        <Form>
                            <div className={styles.contact__form_group}>
                                <Input
                                    type="text"
                                    icon="name"
                                    name="name"
                                    placeholder="Full name"
                                    onChange={handleChange}
                                />
                                <Input
                                    type="email"
                                    icon="email"
                                    name="email_address"
                                    placeholder="Email address"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.contact__form_group}>
                                <Input
                                    type="phone"
                                    icon="phone"
                                    name="phone_number"
                                    placeholder="Phone number"
                                    onChange={handleChange}
                                />
                                <Input
                                    type="text"
                                    icon="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    onChange={handleChange}
                                />
                            </div>

                            <Input
                                rows="10"
                                type="textarea"
                                icon="message"
                                name="message"
                                placeholder="Message"
                                onChange={handleChange}
                            />
                            <br />
                            <Button type="submit" disabled={!form.isValid}>
                                Send Message <span>🚀</span>
                            </Button>
                        </Form>
                    )}
                </Formik>
            </motion.div>
        </div>
    );
};

export default Contact;
