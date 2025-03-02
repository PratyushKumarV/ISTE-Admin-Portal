const express=require("express")
const dotenv=require("dotenv")

const projects=require("./routes/projectRoutes")
const blogs=require("./routes/blogRoutes")
const events=require("./routes/eventRoutes")
const resources=require("./routes/resourceRoutes")
const gallery=require("./routes/galleryRoutes")

const connectDB=require("./config/db")

dotenv.config()
const app=express()

const PORT=process.env.PORT || 3000

const start=async()=>{
    try{
        await connectDB()
        app.use("/api/projects", projects)
        app.use("/api/blogs", blogs)
        app.use("/api/events", events)
        app.use("/api/resources", resources)
        app.use("/api/gallery", gallery)

        app.listen(PORT, ()=>{
            console.log(`Server listening on port ${PORT}...`)
        })
    }catch(error){
        console.error(error.message)
    }
}

start()