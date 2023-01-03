const express = require("express");
const router = express.Router();
const { 
    getMovies,
    setMovie,
    updatedMovie,
    deletedMovie,
    getMoviesByRate,
    getMoviesByTitle,
    getMoviesByYear,
    getMoviesById
     } = require('../controllers/movieController');

router.route('/').get(getMovies).post(setMovie)
router.route('/:id').delete(deletedMovie).put(updatedMovie).get(getMoviesById)
router.route('/by-rate').get(getMoviesByRate)
router.route('/by-year').get(getMoviesByYear)
router.route('/by-title').get(getMoviesByTitle)


module.exports = router;