const express=require("express")
const app=express()

app.get('/', (req, res)=>{
    res.write("<a href='/about'>About</a><br>")
    res.write("<a href='/resources'>Resources</a><br>")
    res.write("<a href='/gallery'>Gallery</a><br>")
    res.write("<a href='/events'>Events</a><br>")
    res.write("<a href='/projects'>Projects</a><br>")
    res.write("<a href='/blogs'>Blogs</a><br>")
    res.end()
})

app.get('/about', (req, res)=>{
    res.end("About page")
})

app.get('/resources', (req, res)=>{
    res.end("Resources page")
})

app.get('/gallery', (req, res)=>{
    res.end("Gallery page")
})

app.get('/events', (req, res)=>{
    res.end("Events page")
})

app.get('/projects', (req, res)=>{
    res.end("Projects page")
})

app.get('/blogs', (req, res)=>{
    res.end("Blogs page")
})

app.listen(5000, ()=>{
    console.log("Server up")
})