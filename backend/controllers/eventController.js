const Event = require('../models/Event')

const addEvent = async(req,res)=>{
    try {
        console.log(req.body)
        const event = new Event(req.body);
        await event.save();
        res.json({ message: "Event added successfully!" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to add event" });
    }
}

const getEvent=async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Error fetching events" });
    }
}

module.exports={addEvent, getEvent}