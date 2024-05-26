const mongoose=require("mongoose");

const bookSchema = new mongoose.Schema({
    bookname:{type:String, required:true},
    description:{type:String, required:true},
    author:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
    likes: { type: Number, default: 0 },
});
const UserModel=  mongoose.model("books",bookSchema);
module.exports=UserModel