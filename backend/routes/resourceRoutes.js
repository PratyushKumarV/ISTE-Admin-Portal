const express=require('express')
const router=express.Router();

router.use(express.json())

const {addResource,getResource}=require("../controllers/resourceController")

router.post('/',addResource).get('/',getResource)

module.exports=router