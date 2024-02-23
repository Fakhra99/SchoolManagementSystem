const express=require("express")
const app=express();
const PORT=3000;
const newAdmin = require("./models/admin.models")
const connectDb = require("./config/connectDb")
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

connectDb()


app.listen(PORT, ()=>{
    console.log(`connection esteblished on port ${PORT}`);
})
