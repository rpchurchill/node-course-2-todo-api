var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET todos/1234324
app.get('/todos/:id', (req, res) => {
  var todoId = req.params.id;
  
  if (!ObjectID.isValid(todoId)) {
    console.log('todo ID not valid');
    return res.status(404).send();
  }

  Todo.findById(todoId).then((todo) => {
    if (!todo) {
      console.log('todo Id not found');
      return res.status(400).send();
    }
    console.log('Todo By Id', todo);
    res.send(todo);
  }); //.catch((e) => {
  //  console.log('Does this ever happen?',e);
  //  res.status(400).send();
  //});
  
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
