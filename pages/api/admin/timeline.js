import authMiddleware from "@/middleware/authMiddleware";
import db from "@/utils/db";
import Timeline from "../../../models/Timeline";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                const { description, year } = req.body;

                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

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

            if (method === "PUT") {
                const { id } = req.body;
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const timeline = await Timeline.findByIdAndDelete(id);
                if (!timeline) {
                    return res.status(400).json({ error: "Timeline item not found.", ok: false });
                }

                const timelines = await Timeline.find().sort({ createdAt: -1 }).exec();
                return res
                    .status(200)
                    .json({ message: "Timeline item deleted successfully.", timelines, ok: true });
            }

            if (method === "PATCH") {
                const { _id, description, year } = req.body;

                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const timeline = await Timeline.findById(_id);

                if (!timeline) {
                    return res.status(400).json({ error: "Timeline item not found.", ok: false });
                }

                if (description) {
                    timeline.description = description;
                }

                if (year) {
                    timeline.year = year;
                }

                await timeline.save();
                return res
                    .status(200)
                    .json({ message: "Timeline item updated successfully.", timeline, ok: true });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
