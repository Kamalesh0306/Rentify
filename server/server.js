const express=require('express');
const app=express();
const cors = require("cors");
const bookRoute=require("./routes/booksRoute");

require("./connections/connect");

app.use(express.json());
app.use(cors());
app.use("/api/v1",bookRoute);

app.listen(3001, ()=>{
    console.log("Running the server");
})