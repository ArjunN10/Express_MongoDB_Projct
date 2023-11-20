const mongoose=require("mongoose")
const userschema=new mongoose.Schema({

    name:"string",
    email:"string",
    username:"string",
    password:"string",
    photo:"string",
})

module.exports=mongoose.model("user",userschema)