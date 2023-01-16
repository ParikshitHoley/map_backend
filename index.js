const express =require("express");
const mongoose = require("mongoose");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();

const Signupcontrol = require("./control/signup");
app.use("/signup",Signupcontrol);

const Logincontrol = require("./control/login");
app.use("/login",Logincontrol);

// AIzaSyAkWEpj-xLA_hed1s02kGcAWiQz_FOO4wM

app.listen(process.env.PORT ,async()=>{
    try{
         await mongoose.connect("mongodb+srv://parikshitpatil:Parikshit123@cluster0.4vt0nwr.mongodb.net/?retryWrites=true&w=majority")
         console.log("done")
    }
    catch(e)
    {
        console.log(e.message)
    }
})