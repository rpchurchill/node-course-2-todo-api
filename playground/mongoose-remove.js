const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove({}).then((result) => {
//Todo.deleteMany({}).then((result) => {
//  console.log(result);
//});

//Todo.findOneAndRemove('5bf34d0c688cdd748a0e27d4').then((todo) => {
//Todo.findOneAndDelete('5bf35246688cdd748a0e2948').then((todo) => {
Todo.findOneAndDelete({"text": "fred barney wilma"}).then((todo) => {
  console.log(todo);
});