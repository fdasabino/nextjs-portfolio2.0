import Button from "@/components/Layout/Button/Button";
import Input from "@/components/Layout/Input/Input";
import Loader from "@/components/Layout/Loader/Loader";
import styles from "@/styles/pages/SignIn.module.scss";
import { signInValidation } from "@/utils/formsValidation";
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

interface SignInProps {
    providers: Record<string, SessionProviderProps>;
    callbackUrl: string;
    csrfToken: string;
}

const initialValues = {
    login_email: "",
    login_password: "",
};

const SignIn = ({ callbackUrl, csrfToken }: SignInProps) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(initialValues);
    const router = useRouter();
    const { login_email, login_password } = user || initialValues;

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
            const res = (await signIn("credentials", options)) as { user?: any; error?: any };

            if (res?.error) {
                toast.error(res?.error);
                return;
            }

            setUser(res.user);

            formikHelpers.resetForm();

            router.push(callbackUrl || "/");

            setTimeout(() => {
                toast.success("Successfully signed in!");
            }, 2000);
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
                <section>
                    <div className={styles.signin}>
                        <h2>Sign In</h2>
                        <Formik
                            enableReinitialize
                            initialValues={{ login_email, login_password }}
                            validationSchema={signInValidation}
                            onSubmit={handleSignIn}>
                            {(form) => (
                                <Form
                                    method="post"
                                    action="/api/auth/signin/email">
                                    <input
                                        name="csrfToken"
                                        type="hidden"
                                        defaultValue={csrfToken}
                                    />
                                    <Input
                                        type="email"
                                        icon="email"
                                        name="login_email"
                                        placeholder="Email address"
                                        onChange={handleChange}
                                    />
                                    <Input
                                        type="password"
                                        icon="password"
                                        name="login_password"
                                        placeholder="Password"
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
                    </div>
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
