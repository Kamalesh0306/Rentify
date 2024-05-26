const mongoose= require("mongoose");

mongoose.connect(
    "mongodb+srv://kamalesh:kamalsan0306@cluster0.jbggtgw.mongodb.net/book?retryWrites=true&w=majority"
)
.then(()=> console.log("CONNECTED"));