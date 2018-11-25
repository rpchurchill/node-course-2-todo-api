var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false); 

//mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/TodoApp', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
       //https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars

//mongoose.set('useCreateIndex', true);

//module.exports = {mongoose: mongoose};
module.exports = {mongoose};       //ES6 shorthand
