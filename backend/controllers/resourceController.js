const Resource=require("../models/Resource")

const addResource=async (req, res)=>{
    try{
        const newResource=new Resource(req.body)
        await newResource.save()
        res.status(201).json({message: "Resource added successfully"})
    }catch(error){
        console.error(error)
        res.status(500).json({error: "Error fetching resources"})
    }
}

const getResource=async(req, res)=>{
    try{
        const resource=await Resource.find()
        res.status(200).json(resource)
    }catch(error){
        console.error(error)
        res.status(500).json({error:"Error fetching resources"})
    }
}

module.exports={addResource, getResource}