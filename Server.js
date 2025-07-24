const express = require('express');
const app = express();
let bodyParser = require('body-parser');
let port = process.env.backend_port;

require('dotenv').config();

//------------------------------routes----------------------------------------//

app.get('/',(req,res)=>{
    res.send('this is working')
})

app.listen(port,()=>{
console.log("app is running on port");
})