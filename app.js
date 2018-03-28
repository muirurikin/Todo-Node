var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Todo-Node');
});

app.listen(port, () => {
    console.log('App listening on port ' + port);
});