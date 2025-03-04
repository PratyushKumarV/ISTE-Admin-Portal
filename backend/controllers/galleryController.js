const Gallery=require("../models/Gallery")
const axios=require("axios")
const FormData=require("form-data")

const addGallery=async(req, res)=>{
    try{
         // req.file has the file uploaded as a form data, parsed using multer
         if(!req.file){
            return res.status(400).json({error: "No file uploaded"})
        }

        const imgKey=process.env.IMGBB_KEY
        const formData=new FormData()
        formData.append("image", req.file.buffer.toString("base64"))

        const response=await axios.post(`https://api.imgbb.com/1/upload?key=${imgKey}`, formData, {
            headers: formData.getHeaders() // automatically sets correct headers
        })
    

        const newImage=new Gallery({
            image:{
                url:response.data.data.url
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