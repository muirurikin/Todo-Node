var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var app = express();

var Todos = require('../models/todo');


app.use(bodyParser.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

router.get('/api/todos/:uname', function(req, res) {
    Todos.find({ username: req.params.uname }, function(err, todos) {
        if (err) throw err;
        res.send(todos);
    });
});
router.post('/todos', function(req, res, next) {
    var newTodo = new Todos({
        username: 'test user',
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
    });
    Todos.addTodos(newTodo, function(err, todo) {
        if (err) throw err;
        res.send('Successful');
    });
    next();
});

module.exports = router;