import authMiddleware from "@/middleware/authMiddleware";
import db from "@/utils/db";
import Timeline from "../../../models/Timeline";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const { description, year } = req.body;
                console.log(req.body);

                if (!description || !year) {
                    return res.status(400).json({ error: "Bad Request - Incomplete request" });
                }

                const newTimeline = new Timeline({
                    description,
                    year,
                });

                await newTimeline.save();
                return res.status(201).json({ ok: true, newTimeline });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
