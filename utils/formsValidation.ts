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

export const projectValidation = Yup.object().shape({
    name: Yup.string().min(2).max(50).required("Name is required..."),
    description: Yup.string().min(2).max(2000).required("Description is required..."),
    image: Yup.string()
        .url("Invalid image URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid image URL")
        .required("Image URL is required"),
    techTags: Yup.string()
        .matches(/^[\w\s,]+$/, "Invalid tech tags format")
        .required("Tech tags are required"),
    repository: Yup.string()
        .url("Invalid repository URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid repository URL")
        .required("Repository URL is required"),
    live_url: Yup.string()
        .url("Invalid live URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid live URL")
        .required("Repository URL is required"),
});

export const testimonialValidation = Yup.object().shape({
    name: Yup.string().min(2).max(50).required("Name is required"),
    description: Yup.string().min(2).max(750).required("Description is required"),
    image: Yup.string()
        .url("Invalid image URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid image URL")
        .required("Image URL is required"),
    workplace: Yup.string().min(2).max(50).required("Workplace is required"),
    position: Yup.string().min(2).max(50).required("Position is required"),
});

export const aboutValidation = Yup.object().shape({
    description: Yup.string().min(2).max(750).required("Description is required"),
    image: Yup.string()
        .url("Invalid image URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid image URL")
        .required("Image URL is required"),
});

export const timelineValidation = Yup.object().shape({
    year: Yup.string().min(2).max(50).required("Year is required"),
    description: Yup.string().min(2).max(400).required("Description is required"),
});
