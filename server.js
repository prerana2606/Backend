const express = require ("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");

const app = express(); 
const PORT = 4000;

let data=[{
    name:"prerana",
    age:19,
    gender:"female"
},
{
    name:"pratik",
    age:20,
    gender:"male"
},
{
       name:"somil",
       age:19,
       gender:"male"
}]
//localhost:8080
//C:\
//domain
//www.google.com/
// https://www.jiocinema
// C:\Users\hp\OneDrive\Desktop\MERN Internship\MongoDB
// app.listen()

app.get("/",(req,res)=>{
    res.send("Hello World");
    console.log("Coffee pe chale??");
});
app.get("/users",(req,res)=>{
    res.send(data);
    console.log("Coffee pe chale??");
});

app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`.bgBlack.yellow) ;
});