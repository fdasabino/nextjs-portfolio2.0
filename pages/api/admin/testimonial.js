import authMiddleware from "@/middleware/authMiddleware";
import Testimonial from "@/models/Testimonial";
import db from "@/utils/db";
import slugify from "slugify";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;
    const { name, description, image, workplace, position } = req.body;
    console.log(req.body);

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                if (!name || !description || !image || !workplace || !position) {
                    console.log(name, description, image, workplace, position);
                    return res.status(400).json({ error: "Bad Request - Incomplete request" });
                }

                const newTestimonial = new Testimonial({
                    name,
                    slug: slugify(name, { lower: true }),
                    description,
                    image,
                    workplace,
                    position,
                });

                await newTestimonial.save();
                return res.status(201).json({ ok: true, newTestimonial });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
