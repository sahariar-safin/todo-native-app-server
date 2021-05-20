const mongoose = require('mongoose');

const Todo = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    todoID: {
        type: Number,
        required: true,
        unique: true
    },
    todoName: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const ToDos = mongoose.model('ToDos', Todo);

module.exports = ToDos;