const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var todoId = '5bef24255476a32f9f126039';
var userId = '5beca038d49f08ce4e8e98d3';

//if (!ObjectID.isValid(todoId)) {
//  console.log('todo ID not valid');
//}

if (!ObjectID.isValid(userId)) {
  console.log('user ID not valid');
}

//Todo.find({
//  _id: todoId
//}).then((todos) => {
//  console.log('Todos', todos);
//});

//Todo.findOne({
//  _id: todoId
//}).then((todo) => {
//  console.log('Todo', todo);
//});

//Todo.findById(todoId).then((todo) => {
//  if (!todo) {
//    return console.log('todo Id not found');
//  }
//  console.log('Todo By Id', todo);
//}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('user Id not found');
  }
  console.log('User By Id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
