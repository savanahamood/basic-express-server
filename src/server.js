'use strict';
const express = require("express");
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.get('/',(req,res)=>{
    res.send("hello");
});

app.get('/person',(req,res)=>{
    res.json({
        name:"Savana"
    })
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