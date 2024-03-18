import authMiddleware from "@/middleware/authMiddleware";
import Project from "@/models/Projects";
import db from "@/utils/db";
import slugify from "slugify";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;
    const { name, description, image, techTags, repository, live_url } = req.body;

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                if (!name || !description || !image || !techTags || !repository || !live_url) {
                    return res.status(400).json({ error: "Bad Request - Incomplete request" });
                }

                const techTagsArray = techTags
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter((tag) => tag !== "");

                const newProject = new Project({
                    name,
                    slug: slugify(name, { lower: true }),
                    description,
                    image,
                    techTags: techTagsArray,
                    repository,
                    live_url,
                });

                await newProject.save();
                return res.status(201).json({ ok: true, newProject });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
