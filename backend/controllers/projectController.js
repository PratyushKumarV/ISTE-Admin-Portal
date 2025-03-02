const Project=require('../models/Project')

const addProject=async (req, res) => {
    try {
        console.log(req.body)
        const project = new Project(req.body);
        await project.save();
        res.json({ message: "Project added successfully!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to add project" });
    }
}

const getProject=async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: "Error fetching projects" });
    }
}

module.exports={addProject, getProject}