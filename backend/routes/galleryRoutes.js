const express=require('express')

const router=express.Router()
router.use(express.json())

const {addGallery, getGallery}=require("../controllers/galleryController")

router.get('/', getGallery).post('/',express.raw({type: "multipart/form-data", limit:"32mb"}), addGallery)

module.exports=router