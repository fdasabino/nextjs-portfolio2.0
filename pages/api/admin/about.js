import authMiddleware from "@/middleware/authMiddleware";
import About from "@/models/About";
import db from "@/utils/db";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const { description, image } = req.body;
                console.log(req.body);
                if (!description || !image) {
                    console.log(description, image);
                    return res.status(400).json({ error: "Bad Request - Incomplete request" });
                }

                // create about post
                const newAbout = new About({
                    description,
                    image,
                    active: false,
                });

                await newAbout.save();
                return res.status(201).json({ ok: true, newAbout });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
