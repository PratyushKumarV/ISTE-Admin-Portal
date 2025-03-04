const mongoose=require('mongoose')

const resource_schema = ({
    resource_name:{type:String},
    domain:{type:String},
    github_link:{type:String},
    notion_link:{type:String},
    other_link:{type:String},
    banner_photo: { 
        filename: { type: String },    
        filepath: { type: String },    
        filetype: { type: String },    
        size: { type: Number }         
    }
})

const Resource = mongoose.model("resources",resource_schema);
module.exports=Resource;