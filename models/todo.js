var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var toDoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', toDoSchema);

module.exports = Todos;

//Get Todos
module.exports.getTodos = function(callback, limit) {
    Todos.find(callback).limit(limit);
  }
//Get Todo
module.exports.getTodoById = function(id, callback) {
    Todos.findById(id, callback);
  }

module.exports.addTodos = function (todo, callback) {
    Todos.create(todo, callback);
}
module.exports.updateTodos = function (todos) {

}
module.exports.removeTodos = function (id, callback) {
    var query = { _id: id};
    Todos.remove(query, callback)
}