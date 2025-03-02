const mongoose=require('mongoose')

const BlogSchema = new mongoose.Schema({
    blog_name:{type:String},
    blog_date:{type:String},
    blog_link:{type:String},
    writer_name:{type:String},
    writer_regno:{type:String},
    image: { 
        filename: { type: String },    
        filepath: { type: String },    
        filetype: { type: String },    
        size: { type: Number }         
    }
})

const Blog = mongoose.model("blogs",BlogSchema);

module.exports=Blog