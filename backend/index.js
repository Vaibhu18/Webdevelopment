const express = require("express");
const app = express();

app.get('/',(req, res)=>{
    res.send("Vaibhav Shinde hey");
}).listen(3000);