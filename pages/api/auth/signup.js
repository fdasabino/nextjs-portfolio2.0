import User from "@/models/User";
import db from "@/utils/db";
import bcrypt from "bcrypt";
import { validateEmail } from "../../../utils/globalFunctions";

const handler = async (req, res) => {
    try {
        await db.connectDB();

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(422).json({ message: "Please fill in all fields..." });
        }

        if (!validateEmail(email)) {
            return res.status(422).json({ message: "Invalid email address, please try again..." });
        }

        const user = await User.findOne({ email });
        if (user && user.email === email) {
            return res
                .status(422)
                .json({ message: "Email address not available, please try again..." });
        }

        if (password.length < 6) {
            return res
                .status(422)
                .json({ message: "Password must be at least 6 characters long..." });
        }

        if (password.length > 20) {
            return res
                .status(422)
                .json({ message: "Password must be less than 20 characters long..." });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        const createdUser = await newUser.save();
        res.status(201).json({
            message: `Sign up successful!`,
            user: createdUser,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default handler;
