const mongoose=require('mongoose')

const GallerySchema = new mongoose.Schema({
    image: { 
        url:{type: String}         
    }
});


const Gallery = mongoose.model("gallery",GallerySchema)

module.exports=Gallery