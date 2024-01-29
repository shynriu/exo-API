const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const Movie = require('./model')
const cors = require("cors");

app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        console.error('Error getting movies:', error);
        res.status(500).send('Error');
    }
});

app.post('/create-movie', async (req, res) => {
    const { name, description, imageUrl } = req.body;
    try {
        const newMovie = await Movie.create({ name, description, imageUrl });
        res.status(201).json(newMovie);
    } catch (error) {
        console.error('Error creating movie:', error);
        res.status(500).send('Error');
    }
});

app.delete('/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
        const movie = await Movie.findByPk(movieId);
        if (movie) {
            await movie.destroy();
            res.send('Movie deleted successfully');
        } else {
            res.status(404).send('Movie not found');
        }
    } catch (error) {
        console.error('Error deleting movie:', error);
        res.status(500).send('Error');
    }
});