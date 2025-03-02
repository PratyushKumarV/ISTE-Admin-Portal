const mongoose=require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {type: String},
    github_scholar: {type: String},  
    linkedin: {type: String},  
    reg_no: {type: String,},  
    domain: {type: String},  
    category: { 
        type: String, 
        enum: ["BOARD", "CORE", "ADVISORY", "COMMITTEE"], 
    },
    image: { 
        filename: { type: String },    
        filepath: { type: String },    
        filetype: { type: String },    
        size: { type: Number }         
    }
});


const Person = mongoose.model("gallery",PersonSchema)

module.exports=Person