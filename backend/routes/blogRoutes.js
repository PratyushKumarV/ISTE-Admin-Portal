const express=require("express")
const router=express.Router()
const {addBlog, getBlog}=require("../controllers/blogController")

router.use(express.json()) // data handled without HTML forms

router.post('/', addBlog).get('/', getBlog)

module.exports=router