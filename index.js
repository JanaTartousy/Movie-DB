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
 
//simple API
app.get('/test',(req,res) => {
res.status(200).json({ message: "ok" });
});
app.get('/time',(req,res) => {
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
res.status(200).json({ message: `${hours} : ${minutes}` });
});
//complicate API
app.get('/hello',(req,res) => {
const ID= "";
res.send({status:200, message:"Hello, <ID>"});
});
app.get("/search",(req,res)=>{
    console.log(req.query.s)
    if(typeof req.query.s =="undefined" || req.query.s === "") 
    {res.send({status:500, error:true, message:"you have to provide a search"})
    }else {
        res.send( {status:200, message:"ok", data:search})
    }
});
//basis for CRUD
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rGETating: 6.2 }];
app.get('/movies/create',(req,res)=>{
    res.status(200).json({message:"done" });
});
app.get('/movies/read',(req,res)=>{
    res.status(200).json({ data:movies });
});
app.get('/movies/update',(req,res)=>{
    res.status(200).json({message:"updated" });
});
app.get('/movies/delete',(req,res)=>{
    res.status(200).json({ message:"deleted" });
});
//search
app.get('/movies/read/by-date', (req,res)=>{
    const moviesbydate= movies.sort((a,b)=>a.year - b.year);
    res.send( {status:200, data:moviesbydate});
});
app.get('/movies/read/by-rating', (req,res)=>{
    const moviesbyrate= movies.sort((a, b)=> a.rating - b.rating);
    res.send( {status:200, data:moviesbyrate});
});
app.get('/movies/read/by-title', (req,res)=>{
    const moviesbytitle= movies.sort((a, b)=>{
        if (a.title< b.title){
            return - 1;
        }
        if (a.title> b.title){
            return 1;
        }
        return 0;
    })
        res.send( {status:200, data:moviesbytitle});
    });
//read one
app.get('/movies/read/id/:ID', (req,res)=>{
    movies.forEach((MOVIE)=>{
        if(MOVIE.id == req.params.ID){
        res.send({ status: 200, data: MOVIE });
        return;
        } });
    res.send({ status: 404, error:true, message: `the movie ${req.params.ID} does not exist` });
  });
//create
app.post('/movies/add' , (req,res)=>{
    const { title, year, rating } = req.query;
    if (!title || !year) {
        return res.json({ status: 403, error: true, message: 'You cannot create a movie without providing a title and a year',
        });}
      if (year.length !== 4 || isNaN(year)) {
        return res.json({ status: 403, error: true, message: 'the Year should be of 4 digit number',
        });}
      if (!rating) {rating = 4;}
      const MOVIE = {title,year,rating,};
      movies.push(MOVIE);
      res.json(movies);
});
//delete
app.delete('/movies/delete/:ID', (req,res)=>{
data  = req.params;
var movieToDelete = false;
for (var i = 0; i<movies.length; i++){
    if(data.ID == movies[i].id){
        movieToDelete= true;
        var index= i;}
} if (movieToDelete){
movies.splice(index, 1);
{res.send({status: 200, data: movies})}
}else {
    res.send({ status: 404, error:true, message: `the movie ${data.ID} does not exist` });
   } 
}) 
//update
app.put('/movies/update', (req,res)=>{
data = req.params;
  Title = req.query.title
  Year = req.query.year
  Rating =req.query.rating
  var New = false;
  for(var i = 0; i < movies.length; i++){
    if(data.ID == movies[i].id){
      New = true;
      index= i;}
  }
  if (New){
    if(Title) movies[index].title = Title
    if(Year) movies[index].year = Year
    if(Rating) movies[index].rating = Rating
    res.send({status:200, data:movies})
  }else {
    res.send({status:404, error:true, message: `the movie ${data.ID} does not exist`});
  }

  })
//using http verbs
  