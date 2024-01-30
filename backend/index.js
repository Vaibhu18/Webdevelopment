let express = require("express");
let app = express();
let port = 3000;

app.set("view engine","ejs");

app.get('/', (req, res)=>{
   
    console.log(`Server is started on ${port} and reqest params is ${name.a}`);
})

app.get('/home',(req, res)=>{
    res.render("index");
    console.log(`Server is started on ${port} and i am from home`);
})

app.get('/error',(req, res)=>{
    res.render("error");
    console.log(`Server is started on ${port} and i am from home`);
})

app.listen(port);