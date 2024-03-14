import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import styles from "@/styles/pages/SignIn.module.scss";
import { Form, Formik, FormikHelpers } from "formik";
import { GetServerSidePropsContext } from "next";
import {
    SessionProviderProps,
    getCsrfToken,
    getProviders,
    getSession,
    signIn,
} from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
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

const SignIn = ({ providers, callbackUrl, csrfToken }: SignInProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialValues);
    const { login_email, login_password } = user;
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSignIn = async (
        values: { login_email: string; login_password: string },
        formikHelpers: FormikHelpers<{ login_email: string; login_password: string }>
    ) => {
        try {
            setLoading(true);
            let options = {
                redirect: false,
                email: values.login_email,
                password: values.login_password,
            };
            const res = await signIn("credentials", options);

            if (res?.error) {
                toast.error(res?.error);
                return;
            }

            // Update user state with received user data after successful sign-in
            if (res) {
                setUser(res.user);
            }

            toast.success("Successfully signed in!");
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // Reset the form values after successful sign-in
            formikHelpers.resetForm();
            // Redirect the user to the specified callback URL or to the homepage
            router.push(callbackUrl || "/");
        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred");
            }
        } finally {
            // Set loading state to false when the operation is complete
            setLoading(false);
        }
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
                                    onChange={handleChange}
                                />
                                <Input
                                    type="password"
                                    icon="password"
                                    name="login_password"
                                    placeholder="Password"
                                    setLoading={setLoading}
                                    onChange={handleChange}
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
            props: {
                providers,
                callbackUrl,
                csrfToken,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: { providers: [] },
        };
    }
}
