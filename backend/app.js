const express=require("express")
const app=express()

const projects=require("./routes/projects")
const blogs=require("./routes/blogs")

app.use("/api/projects", projects)
app.use("/api/blogs", blogs)

app.listen(5000, ()=>{
    console.log("Server listening on port 5000...")
})