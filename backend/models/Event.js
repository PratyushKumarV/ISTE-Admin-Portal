const mongoose=require('mongoose')

const EventSchema = new mongoose.Schema({
    event_name: {type:String},
    event_description: {type:String},
    event_date: {type:Date},
    event_venue: {type:String},
    event_speaker_name: {type:String},
    banner_photo: {
        filename: {type:String},    
        filepath: {type:String},    
        filetype: {type:String},    
        size: {type:Number}   
    }, 
    eventPhotos: {
        filename: {type:String},    
        filepath: {type:String},    
        filetype: {type:String},    
        size: {type: Number} 
    } 
})

const Event = mongoose.model("events",EventSchema)

module.exports=Event;