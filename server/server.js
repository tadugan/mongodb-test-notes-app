const express = require('express');
const morgan = require('morgan');
const connect = require('./connect');
const {json, urlencoded} = require('body-parser');
const app = express();
// import model here TODO:

app.use(morgan('dev'));
app.use(urlencoded({extended: true}));
app.use(json());

// TODO: GET Route

// TODO: POST Route

// TODO: UPDATE Route

// TODO: DELETE Route

const PORT = 5000;

connect('mongodb://localhost:27017/mongo-notes-test')
  .then(() => app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  }))
  .catch(e => console.error(e));