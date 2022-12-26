const { response } = require('express');
const express = require( 'express' )
const app     = express()
const port    = process.env.PORT || 3000

app.get( '/' ,(req, res) => {
res.type( 'text/plain' )
res.send( 'ok' )
})

app.listen( port ,
() => console.log(`Listen is on Port at http://localhost:${ port } Ctrl + C to Stop `) ) 


app.get('/test',(req,res) => {
res.status(200).json({ message: "ok" });
})
app.get('/time',(req,res) => {
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
res.status(200).json({ message: `${hours} : ${minutes}` });
})
app.get('/hello',(req,res) => {
const ID= "";
res.send({status:200, message:"Hello, <ID>"});
})
app.get("/search",(req,res)=>{
    console.log(req.query.s)
    if(typeof req.query.s =="undefined" || req.query.s === "") 
    {res.send({status:500, error:true, message:"you have to provide a search"})
    }else {
        res.send( {status:200, message:"ok", data:search})
    }
})