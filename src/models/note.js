const mongoose = require('mongoose');


// Schema for my note collection
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    textBody: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('note', noteSchema)