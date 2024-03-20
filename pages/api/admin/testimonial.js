import authMiddleware from "@/middleware/authMiddleware";
import Testimonial from "@/models/Testimonial";
import db from "@/utils/db";
import slugify from "slugify";

const handler = async (req, res) => {
    await db.connectDB();
    const { method } = req;

    try {
        await authMiddleware(req, res, async () => {
            if (method === "POST") {
                const { name, description, image, workplace, position } = req.body;
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                if (!name || !description || !image || !workplace || !position) {
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

            if (method === "PUT") {
                const { id } = req.body;
                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const testimonial = await Testimonial.findByIdAndDelete(id);
                if (!testimonial) {
                    return res.status(400).json({ error: "Reference not found.", ok: false });
                }
                const testimonials = await Testimonial.find().sort({ createdAt: -1 }).exec();

                return res
                    .status(200)
                    .json({ message: "Reference deleted successfully.", testimonials, ok: true });
            }

            if (method === "PATCH") {
                const { _id, name, description, image, workplace, position } = req.body;

                if (!req.user) {
                    return res.status(401).json({ error: "Unauthorized" });
                }

                const testimonial = await Testimonial.findById(_id);

                if (!testimonial) {
                    return res.status(400).json({ error: "Reference not found.", ok: false });
                }

                if (name) {
                    testimonial.name = name;
                }

                if (description) {
                    testimonial.description = description;
                }

                if (image) {
                    testimonial.image = image;
                }

                if (workplace) {
                    testimonial.workplace = workplace;
                }

                if (position) {
                    testimonial.position = position;
                }

                await testimonial.save();
                return res
                    .status(200)
                    .json({ message: "Reference updated successfully.", testimonial, ok: true });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: error.message, ok: false });
    }
};

export default handler;
