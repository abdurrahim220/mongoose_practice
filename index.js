require('dotenv').config()
const port = process.env.PORT || 5000;

const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    res.send("Practice server")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})