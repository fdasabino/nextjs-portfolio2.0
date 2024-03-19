import authMiddleware from "@/middleware/authMiddleware";
import Project from "@/models/Projects";
import db from "@/utils/db";
import slugify from "slugify";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                const { name, description, image, techTags, repository, live_url } = req.body;

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

            if (method === "PUT") {
                const { id } = req.body;

                const project = await Project.findByIdAndDelete(id);
                if (!project) {
                    return res.status(400).json({ error: "Project not found.", ok: false });
                }
                const projects = await Project.find().sort({ createdAt: -1 }).exec();

                return res
                    .status(200)
                    .json({ message: "Project deleted successfully.", projects, ok: true });
            }

            if (method === "PATCH") {
                const { _id, name, description, image, techTags, repository, live_url } = req.body;
                console.log(req.body);

                const project = await Project.findById(_id);

                if (!project) {
                    return res.status(400).json({ error: "Project not found.", ok: false });
                }

                if (name) {
                    project.name = name;
                }

                if (description) {
                    project.description = description;
                }

                if (image) {
                    project.image = image;
                }

                if (typeof techTags === "string") {
                    project.techTags = techTags
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter((tag) => tag !== "");
                }

                if (repository) {
                    project.repository = repository;
                }

                if (live_url) {
                    project.live_url = live_url;
                }

                await project.save();
                return res
                    .status(200)
                    .json({ message: "Project updated successfully.", project, ok: true });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
