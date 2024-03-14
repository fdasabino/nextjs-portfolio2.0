import authMiddleware from "@/middleware/authMiddleware";
import About from "@/models/About";
import db from "@/utils/db";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;
    const { description, image, timeline } = req.body;

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                if (!description || !image || !timeline) {
                    return res.status(400).json({ error: "Bad Request - Incomplete request" });
                }

                // create about post
                const newAbout = new About({
                    description,
                    image,
                    timeline,
                });

                await newAbout.save();
                return res.status(201).json({ ok: true, newAbout });
            }

            // update about post
            if (method === "PATCH") {
                const { id } = req.query;
                await About.findByIdAndUpdate(id, {
                    description,
                    image,
                    timeline,
                });
                return res.status(200).json({ ok: true, message: "About updated" });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
