const Blog=require("../models/Blog")

const addBlog=async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.json({ message: "Blog added successfully!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to add blog" });
    }
}

const getBlog=async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Error fetching blogs" });
    }
}

module.exports={addBlog, getBlog}