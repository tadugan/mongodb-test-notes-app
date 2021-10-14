const mongoose = require('mongoose');


// Schema for my note collection
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    textBody: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('note', noteSchema)