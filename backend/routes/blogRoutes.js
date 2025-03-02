const express=require("express")
const router=express.Router()
const Blog=require("../models/Blog")

router.use(express.json()) // data handled without HTML forms

router.post('/', async (req, res)=>{
    try{
        const newBlog=new Blog(req.body)
        const saveBlog=await newBlog.save()
        res.status(200).json({message: "successful", data: saveBlog})
    }catch(error){
        console.error(error.message)
        process.exit(1)
    }
})

module.exports=router