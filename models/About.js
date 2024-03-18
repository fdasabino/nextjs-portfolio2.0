import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            minlength: [2, "must be at least 2 characters"],
            maxlength: [750, "must be a maximum of 750 characters"],
        },
        active: {
            type: Boolean,
            default: false,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const About = mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;
