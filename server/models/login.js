const mongoose=require("mongoose");

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    userType: { type: String, required: true, enum: ['buyer', 'seller'] }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection