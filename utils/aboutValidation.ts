import * as Yup from "yup";

export const aboutValidation = Yup.object().shape({
    description: Yup.string().required("Description is required"),
    image: Yup.string()
        .url("Invalid image URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid image URL")
        .required("Image URL is required"),
    year: Yup.string()
        .matches(/^[0-9]{4}$/, "Invalid year format")
        .required("Year is required"),
    year_description: Yup.string().required("Year description is required"),
});
