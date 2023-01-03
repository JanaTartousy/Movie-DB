const Movie = require('../models/movieModel')
// @desc Get movies
// @route GET /api/movies
// @access Private
const getMovies = (async (req, res) => {
    const movies = await Movie.find()
  res.status(200).json({data: movies})
})
// get movies by id
const getMoviesById = (async (req, res) => {
    let {id} = req.params;
    try{
        const movies = await Movie.findById(id)
        if(!movies)
        return res.status(404).json({message: `movies with id ${id} not found `})
        return res.status(200).json({data: movies})
    }
    catch (error){
    console.log(error);}
})
// get movies by title
const getMoviesByTitle = (async (req, res) => {
    let sortBy = "title";
    moviesByTitle = await Movie.find({}).sort({ [sortBy]: 1 });
  res.status(200).json({data: movies})
})
// get movies by year
const getMoviesByYear = (async (req, res) => {
    let sortBy = "year";
    moviesByYear = await Movie.find({}).sort({ [sortBy]: 1 });
  res.status(200).json({data: movies})
})
// get movies by rate
const getMoviesByRate = (async (req, res) => {
    let sortBy = "rating";
    moviesByRating = await Movie.find({}).sort({ [sortBy]: 1 });
  res.status(200).json({data: movies})
})

// @desc Set movie
// @route POST /api/movies
// @access Private
const setMovie = (async (req, res) => {
    if(!req.body.title || !req.body.year || !req.body.rating){
        res.status(404)
        throw new Error('Please add something')
    }
    const {title,year,rating } = req.body;
 try {
    const result = await Movie.create({
        title: title,
        year: year,
        rating: rating
    })
    return res.status(201).json({
        success: true,
        result
    })
 }
 catch (error){
    console.log(error)
 }
  })

// @desc Update movie
// @route PUT /api/movies/:id
// @access Private
const updatedMovie = (async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    if(!movie){
        res.status(404)
        throw new Error('Movie not found')
    }
    const updatedMovie = await Movie.findById(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedMovie)
  })

// @desc Delete movie
// @route DELETE /api/movies/:id
// @access Private
const deletedMovie = (async (req, res) => {
    const movie = await Movie.findById(req.params.id)
    if(!movie){
        res.status(404)
        throw new Error('Movie not found')
    }
    await movie.remove()
    
    res.status(200).json({ id:req.params.id })
  });

module.exports = {
    getMovies,
    setMovie,
    updatedMovie,
    deletedMovie,
    getMoviesByTitle,
    getMoviesByYear,
    getMoviesByRate,
    getMoviesById
}