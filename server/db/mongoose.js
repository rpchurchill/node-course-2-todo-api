var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp', {useNewUrlParser: true});

//mongoose.set('useCreateIndex', true);

//module.exports = {mongoose: mongoose};
module.exports = {mongoose};       //ES6 shorthand
