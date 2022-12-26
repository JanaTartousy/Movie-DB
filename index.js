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
