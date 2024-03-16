import * as Yup from "yup";

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
