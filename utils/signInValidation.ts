import * as Yup from "yup";

const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 20;

export const signInValidation = Yup.object().shape({
    login_email: Yup.string()
        .email("Please enter a valid email address...")
        .required("Email address is required..."),
    login_password: Yup.string()
        .required("Password is required...")
        .min(6, `Password is too short (minimun ${MIN_PASSWORD_LENGTH} characters)`)
        .max(20, `Password is too long (maximum ${MAX_PASSWORD_LENGTH} characters)`),
});
