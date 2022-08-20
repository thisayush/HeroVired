const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/courses",{ 
    
}).then(()=>{
    console.log("Connection Established")
}).catch((e)=>{
    console.log("No connection");
})