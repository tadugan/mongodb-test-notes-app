const express = require('express');
const morgan = require('morgan');
const connect = require('./connect');
const {json, urlencoded} = require('body-parser');
const app = express();
// import model here TODO:
const Note = require('../src/models/note');

app.use(morgan('dev'));
app.use(urlencoded({extended: true}));
app.use(json());

// GET all notes
app.get('/notes', async (req, res) => {
    try {
        const allNotes = await Note.find({})
            .lean()
            .exec();
        res.status(200).json(allNotes);
    } catch (error) {
        console.log(`Error getting all notes: ${error}`);
        res.sendStatus(500);
    }
});

// TODO: GET Route - by ID

// TODO: POST Route

// TODO: UPDATE Route

// TODO: DELETE Route

const PORT = 5000;

connect('mongodb://localhost:27017/mongo-notes-test')
  .then(() => app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  }))
  .catch(e => console.error(e));