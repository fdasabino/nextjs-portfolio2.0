import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import styles from "@/styles/pages/SignIn.module.scss";
import { Form, Formik, FormikHelpers } from "formik";
import { GetServerSidePropsContext } from "next";
import { SessionProviderProps, getCsrfToken, getProviders, getSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import * as Yup from "yup";

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 20;

interface SignInProps {
    providers: Record<string, SessionProviderProps>;
    callbackUrl: string;
    csrfToken: string;
}

const initialValues = {
    login_email: "",
    login_password: "",
    full_name: "",
    signup_email: "",
    signup_password: "",
    signup_confirm_password: "",
};

const signInValidation = Yup.object().shape({
    login_email: Yup.string()
        .email("Please enter a valid email address...")
        .required("Email address is required..."),
    login_password: Yup.string()
        .required("Password is required...")
        .min(6, `Password is too short (minimun ${MIN_PASSWORD_LENGTH} characters)`)
        .max(20, `Password is too long (maximum ${MAX_PASSWORD_LENGTH} characters)`),
});

const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialValues);
    const { login_email, login_password } = user;

    const handleSignIn = async (
        values: { login_email: string; login_password: string },
        formikHelpers: FormikHelpers<{ login_email: string; login_password: string }>
    ) => {
        console.log(values);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <section className={styles.signin}>
                    <h2 className={styles.heading}>Sign In</h2>
                    <Formik
                        enableReinitialize
                        initialValues={{ login_email, login_password }}
                        validationSchema={signInValidation}
                        onSubmit={handleSignIn}>
                        {(form) => (
                            <Form
                                method="post"
                                action="/api/auth/signin/email">
                                {/* <input
                            name="csrfToken"
                            type="hidden"
                            defaultValue={csrfToken}
                        /> */}
                                <Input
                                    type="email"
                                    icon="email"
                                    name="login_email"
                                    placeholder="Email address"
                                    setLoading={setLoading}
                                />
                                <Input
                                    type="password"
                                    icon="password"
                                    name="login_password"
                                    placeholder="Password"
                                    setLoading={setLoading}
                                />
                                <Button
                                    type="submit"
                                    style="primary">
                                    Sign in <AiOutlineArrowRight />
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </section>
            )}
        </>
    );
};

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { req, query } = context;
    const { callbackUrl } = query;
    try {
        const session = await getSession({ req });
        const csrfToken = await getCsrfToken(context);
        const providers = await getProviders();

        if (session) {
            return {
                redirect: {
                    destination: callbackUrl,
                },
            };
        }
        return {
            props: {},
        };
    } catch (error) {
        console.error(error);
        return {
            props: { providers: [] },
        };
    }
}
