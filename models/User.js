import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: "Please enter your full name.",
        },
        email: {
            type: String,
            required: "Please enter your email address.",
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            minlength: 6,
            maxlength: 20,
            required: '"Please enter a password.',
        },
        image: {
            type: String,
            default:
                "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
        },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
