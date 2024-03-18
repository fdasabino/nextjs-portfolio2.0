import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
    year: {
        type: string,
        required: true,
    },
    description: {
        type: string,
        required: true,
        minlength: [2, "must be at least 2 characters"],
        maxlength: [400, "must be a maximum of 750 characters"],
    },
    timestamps: true,
});

const Timeline = mongoose.models.Timeline || mongoose.model("Timeline", timelineSchema);

export default Timeline;
