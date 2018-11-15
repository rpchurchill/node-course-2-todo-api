var {mongoose} = require('./db/mongoose');


//var newTodo = new Todo({
//  text: 'Cook dinner'
//});

//var newTodo = new Todo({
//  text: '   test value with whitespace 2    ',
//  completed: false //,
//  //completedAt: new Date().getTime()
//});

//newTodo.save().then((doc) => {
//  console.log('Saved todo: ', JSON.stringify(doc, undefined, 2));
//}, (e) => {
//  console.log('Unable to save todo');
//});

var newUser = new User({
  email: 'fred@fred.com   '
});

newUser.save().then((doc) => {
  console.log('Saved user: ', JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save user ',JSON.stringify(e, undefined, 2));
})