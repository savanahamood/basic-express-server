'use strict';
const express = require("express");
const app = express();
const logger=require('./middleware/logger');
const validator=require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
app.use(logger);
app.get('/',(req,res)=>{
    res.send("hello");
});

app.get('/person',validator,(req,res)=>{
   const name=req.query.name;
    res.send({
        name:name
    })
})
//this is for non string input
/* app.get('/person',validator(5),(req,res)=>{
    console.log('req',req);
    
    res.send({
        name:req.myname,
    })
}) */
app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    })
    res.send(result);
})


app.use('*', notFoundHandler);
app.use(errorHandler)

function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}