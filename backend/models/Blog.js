const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    name: {type:String, required:true},
    date: {type:Date, required: true},
    link: {type: String, required: true},
    author: {type:String, required: true},
    regno: {type: String, required: true},
    banner: {type: String, required: true}
})

const Blog=mongoose.model("blogs", blogSchema)

module.exports=Blog