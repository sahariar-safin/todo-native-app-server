const express = require('express');
const router = express.Router();
const Todo = require('../scema/ToDo');

router.get('/:id', (req, res) => {
    Todo.find({ userID: req.params.id }).sort({ createdAt: -1 })
        .then((todo) => res.json(todo));
})

router.post('/addtodo', (req, res) => {
    const todo = new Todo({
        userID: req.body.userID,
        todoID: req.body.todoID,
        todoName: req.body.todoName
    });
    todo.save()
        .then(response => res.json(response))
        .catch(err => res.json(err));
})

router.post('/deletetodo', (req, res) => {
    console.log(req.body)
    Todo.deleteOne({ todoID: req.body.id })
        .then(response => res.json(response));
})

module.exports = router;