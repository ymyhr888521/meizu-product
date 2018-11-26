const path = require("path");
const express = require('express');
const app = express();
const Ajx = require('./data/index')
//设置静态目录
app.use(express.static(__dirname));


//设置项目的首页
app.get("/index",(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','content-type');
    res.header('Access-Control-Allow-Methods','DELETE,PUT,GET,POST,OPTIONS');
    res.jsonp(Ajx);
})


//监听port3000
app.listen(3000,()=>{
    console.log("server is listening on port 3000")
})