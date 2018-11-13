//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser:true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //db.collection('Todos').find({
  //  _id: new ObjectID('5be9d92b512049cc6ec6ddc6')
  //}).toArray().then((docs) => {
  //  console.log("Todos");
  //  console.log(JSON.stringify(docs, undefined, 2));
  //}, (err) => {
  //  console.log('Unable to fetch todo items', err);
  //});

  db.collection('Users').find({name: 'fred'}).toArray().then((docs) => {
    console.log("Users");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch user items', err);
  });

  //db.collection('Todos').find().count().then((count) => {
  //  console.log(`Todos count: ${count}`);
  //}, (err) => {
  //  console.log('Unable to fetch todo items', err);
  //});

  //client.close();
});
