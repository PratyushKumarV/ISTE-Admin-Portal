const Gallery=require("../models/Gallery")
const axios=require("axios")
const FormData=require("form-data")

const addGallery=async(req, res)=>{
    try{
        const imgKey=process.env.IMGBB_KEY
        const formData=new FormData(req.body)
        console.log(req.body)
        res.status(201).json({message: "Image added successfully"})
    }catch(error){
        console.error(error)
        res.status(500).json({error:"Failed to add image"})
    }
}

const getGallery=async(req, res)=>{
    try{
        const gallery=await Gallery.find()
        res.status(200).json(gallery)
    }catch(error){
        console.error(error)
        res.status(500).json({error: "Error fetching image"})
    }
}

module.exports={addGallery, getGallery}