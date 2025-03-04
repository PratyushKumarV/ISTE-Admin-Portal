const Gallery=require("../models/Gallery")
const getURLImage=require("../utils/uploadImage")

const addGallery=async(req, res)=>{
    try{
         // req.file has the file uploaded as a form data, parsed using multer
         if(!req.file){
            return res.status(400).json({error: "No file uploaded"})
        }
    
        const url=await getURLImage(req.file.buffer.toString("base64"))

        const newImage=new Gallery({
            image:{
                url:url
            }
        })
        await newImage.save()
        
        res.status(201).json({message: "Image added successfully"})
    }catch(error){
        console.error(error.message)
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