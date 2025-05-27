const express=require('express')
const multer=require('multer') // for extracting the image file in the form data in req.body sent from the frontend

const router=express.Router()
const upload=multer({storage: multer.memoryStorage(), limits:{fileSize:32*1024*1024}}) // Stores file in RAM. req.file.buffer contains the raw file data

router.use(express.json())

const {addGallery, getGallery}=require("../controllers/galleryController")

router.get('/', getGallery).post('/', upload.single("image"), addGallery) // image field in upload.single() should match the formData field name

module.exports=router