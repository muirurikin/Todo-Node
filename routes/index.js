var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var app = express();

var Todos = require('../models/todo');


app.use(bodyParser.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/api/todos/', function(req, res) {
    Todos.getTodos(function (err, todos) {
        if (err) throw err;
        res.json(todos);
    })
});
router.get('/api/todos/:_id', function(req, res) {
    Todos.getTodoById(req.params._id, function(err, todo) {
        if (err) {
            throw err;
        }
        res.json(todo);
    });
});
router.post('/todos', function(req, res) {
    var todo = req.body;
    Todos.addTodos(todo, function(err, todo) {
        if (err) throw err;
        res.send('Todo Added');
    });
});
router.delete('/todos/:_id', function(req, res) {
    var id = req.params._id;
    Todos.removeTodos(id, function(err, todo) {
        if (err) throw err;
        res.send('Todo Deleted');
    });
});

module.exports = router;