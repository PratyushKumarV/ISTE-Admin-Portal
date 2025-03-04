const express=require('express')
const router=express.Router();

router.use(express.json())

const {addEvent,getEvent}=require("../controllers/eventController")

router.post('/',addEvent).get('/',getEvent)

module.exports=router