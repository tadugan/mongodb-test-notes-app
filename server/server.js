const express = require("express");
const morgan = require("morgan");
const connect = require("./connect");
const { json, urlencoded } = require("body-parser");
const app = express();
const Note = require("../src/models/note");

app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());

// GET all notes
app.get("/notes", async (req, res) => {
  try {
    const allNotes = await Note.find({}).lean().exec();
    res.status(200).json(allNotes);
  } catch (error) {
    console.log(`Error getting all notes: ${error}`);
    res.sendStatus(500);
  }
});

// GET note by ID
app.get("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  try {
    const note = await Note.findById(noteId).lean().exec();
    res.status(200).json(note);
  } catch (error) {
    console.log(`Error getting by ID: ${error}`);
    res.sendStatus(500);
  }
});

// POST a new note
app.post("/notes", async (req, res) => {
  const noteToCreate = req.body;
  try {
    const note = await Note.create(noteToCreate);
    res.status(201).json(note.toJSON());
  } catch (error) {
    console.log(`Error posting a note: ${error}`);
    res.sendStatus(500);
  }
});

// PUT to update a note title
app.put("/notes/update/title/:id", async (req, res) => {
  const noteId = req.params.id;
  const newTitle = req.body;
  try {
    await Note.findByIdAndUpdate(noteId, newTitle);
    res.status(200).send();
  } catch (error) {
    console.log(`Error updating a note title: ${error}`);
    res.sendStatus(500);
  }
});

// DELETE a note
app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  try {
    await Note.deleteOne({ _id: noteId });
    res.status(204).send();
  } catch (error) {
    console.log(`Error deleting a note: ${error}`);
    res.sendStatus(500);
  }
});

const PORT = 5000;

connect("mongodb://localhost:27017/mongo-notes-test")
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    })
  )
  .catch((e) => console.error(e));
