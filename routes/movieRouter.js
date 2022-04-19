const router = require('express').Router();
const Movie = require('../models/Movie')


router.get('/', async (req, res) => {
    if (!req.body.genre) {
        // Get all movies
        const movies = await Movie.find()
        if (!movies) return res.status(404).send('Movies not found')
        return res.status(200).send(movies)
    }
    //Get movies by genre
    const movies = await Movie.find({genre: req.body.genre})
    if (!movies) return res.status(404).send('Movies not found: ' + req.body.genre)
    return res.status(200).send(movies)
})

// Get movie by _id
router.get('/id', async (req, res) => {
    const movies = await Movie.findById(req.body.id)
    if (!movies) return res.status(404).send('Movies not found: ' + req.body.id)
    return res.status(200).send(movies)
})


// Get movies from 2010 on 
router.get('/2010', async (req, res) => {
    const movies = await Movie.find()

    if (!movies) return res.status(404).send('Movies not found')
    return res.status(200).send(movies.filter((movie) => {
        return movie.year > 2010
    }))
})

// Get director by title
router.get('/director', async (req, res) => {
    const movies = await Movie.findOne({title: req.body.title})
    if (!movies) return res.status(404).send('Movies not found: ' + req.body.title)
    return res.status(200).send(movies.director)
})

module.exports = router