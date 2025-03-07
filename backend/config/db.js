const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected successfully")
    }catch(error){
        console.error(error.message)
        process.exit(1) // exits process with the specified code
    }
}

module.exports=connectDB