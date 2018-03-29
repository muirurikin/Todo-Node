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

module.exports.addTodos = function (newTodo, callback) {
    newTodo.save(callback);
}
module.exports.updateTodos = function (todos) {
    
}
module.exports.removeTodos = function (todos) {
    
}