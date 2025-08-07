const mongoose = require('mongoose');
const config = require(".")
mongoose.set("strictQuery", true)

mongoose.connect(config.DB_URL)
.then(()=>console.log("Database is connected"))
.catch((e)=>{
    console.log("Database connection is not established");
    console.log(e);
})

mongoose.connection.on("connected",()=>{
    console.log("mongoose default connection open to"+config.DB_URL);  
})

mongoose.connection.on("error", (err)=>{
    console.error("Mongoose default connection has an error"+err);
})
mongoose.connection.on("disconnected", ()=>{
    console.log("Disconnected");
})

process.on("SIGINT",()=>{
    process.exit(0);
})

module.exports=mongoose.connection;