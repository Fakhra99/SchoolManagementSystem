const mongoose=require("mongoose")


const connectdb=async()=>{
    await mongoose.connect("mongodb+srv://Noorina:Abc12345@cluster0.ggvk4fm.mongodb.net/SMS")
    console.log("Database connection established");
}

module.exports=connectdb;