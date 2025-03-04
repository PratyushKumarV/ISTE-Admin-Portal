const express=require('express')
const router=express.Router();

router.use(express.json)

const {add_event,get_event}=require("../controllers/eventController")

router.post('/',add_event).get('/',get_event)

module.exports=router