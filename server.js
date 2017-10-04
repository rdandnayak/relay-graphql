var express = require('express');
let MongoClient = require('mongodb').MongoClient;
let schema = require('./data/schema');
let GraphQLHTTP = require('express-graphql');
// import express from 'express';
let app = express();
let chalk = require('chalk');
app.use(express.static('public'));

let url = 'mongodb://admin:admin@ds161860.mlab.com:61860/relaytest';

let db;
MongoClient.connect(url, (err, database) => {
  if (err) throw err;
  db = database;
  app.use(
    '/graphql',
    GraphQLHTTP({
      schema: schema(db),
      graphiql: true
    })
  );
  app.listen(3000, () => {
    console.log(chalk.grey('listening on port 3000'));
  });
});

// app.get('/data/links', (req, res) => {
//   db.collection('links').find({}).toArray((err, links) => {
//     if (err) throw err;
//     else res.json(links);
//   });
// });
