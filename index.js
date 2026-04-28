const express=require("express");
const app=express();
const port=8080;
const mysql=require("mysql2");

const connection=mysql.createConnection({
    host: 'localhost',
  user: 'root',
  database:"emps",
  password : 'shalini'
})

connection.query("SHOW TABLES",(err,resu)=>{
    console.log(err);
    console.log(resu);
})





app.listen(port,()=>{
    console.log("server is working");

})
app.get("/",(req,res)=>{
    res.send("server");
})