import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, "must be at least 2 characters"],
            maxlength: [50, "must be at least 2 characters"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
            minlength: [2, "must be at least 2 characters"],
            maxlength: [750, "must be a maximum of 750 characters"],
        },
        image: {
            type: String,
            required: true,
        },
        techTags: {
            type: [String],
            required: true,
        },
        repository: {
            type: String,
        },
        live: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
