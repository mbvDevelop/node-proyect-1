const express = require('express');
const app = express();
const mongoose = require('mongoose');
// import routes
const port = 3000

const movieRouter = require('./routes/movie.routes')
const cinemaRouter = require('./routes/cinema.routes')

// Connect to db
mongoose.connect('mongodb://localhost:27017/movies', 
{useNewUrlParser: true},
() => console.log('connected to db'))

app.use(express.json());
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/cinema', cinemaRouter)
app.listen(port, () => console.log('Server listening port ' + port));