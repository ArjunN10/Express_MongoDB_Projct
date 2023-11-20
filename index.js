require("dotenv").config()
const express=require("express")
const app=express()
const port=3000;
const adminroute=require("./routes/AdminRoute")


app.use(express.json())
app.use("/",adminroute)

app.listen(port,(err)=>{
    if(err){
        console.log(`error detected ${err}`);
    }
    console.log(`server is listening to port: ${port}`);
})