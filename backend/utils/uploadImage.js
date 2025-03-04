const axios=require("axios")
const FormData=require("form-data")

const getURLImage=async(base64)=>{
    try{
        const imgKey=process.env.IMGBB_KEY

        const formData=new FormData()
        formData.append("image", base64)
        const response=await axios.post(`https://api.imgbb.com/1/upload?key=${imgKey}`, formData, {
            headers:formData.getHeaders()
        })

        return response.data.data.url
    }catch(error){
        console.error(error.message)
        throw new Error("Failed to upload image")
    }
}

module.exports=getURLImage