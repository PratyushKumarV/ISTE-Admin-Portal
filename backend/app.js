const express=require("express")
const dotenv=require("dotenv")

const projects=require("./routes/projects")
const blogs=require("./routes/blogs")
const events=require("./routes/events")
const resources=require("./routes/resources")
const gallery=require("./routes/gallery")

const connectDB=require("./config/db")

dotenv.config()
const app=express()

const PORT=process.env.PORT || 3000

app.use("/api/projects", projects)
app.use("/api/blogs", blogs)
app.use("/api/events", events)
app.use("/api/resources", resources)
app.use("/api/gallery", gallery)

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}...`)
})