const express=require('express')
const router=express.Router();

router.use(express.json())

const {addProject, getProject}=require("../controllers/projectController")

router.post('/', addProject).get('/', getProject)

module.exports=router