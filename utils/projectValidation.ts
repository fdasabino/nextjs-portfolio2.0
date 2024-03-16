import * as Yup from "yup";

export const projectValidation = Yup.object().shape({
    name: Yup.string().min(2).max(50).required("Name is required..."),
    description: Yup.string().min(2).max(750).required("Description is required..."),
    image: Yup.string()
        .url("Invalid image URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid image URL")
        .required("Image URL is required"),
    techTags: Yup.string()
        .matches(/^[\w\s,]+$/, "Invalid tech tags format")
        .required("Tech tags are required")
        .transform((value, originalValue) => {
            // Transforming the tech tags string into an array
            if (typeof originalValue === "string") {
                return originalValue.split(",").map((tag) => tag.trim());
            }
            return value;
        }),
    repository: Yup.string()
        .url("Invalid repository URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid repository URL")
        .required("Repository URL is required"),
    live_url: Yup.string()
        .url("Invalid live URL")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid live URL")
        .required("Repository URL is required"),
});
