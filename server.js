const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
var multer = require('multer');
var upload = multer();
const connectionString= "mongodb+srv://oogabugha:freshdesk1@cluster0.cxfe42l.mongodb.net/?retryWrites=true&w=majority"
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db('freshdesk-delete-jobs');
    const deleteJobs = db.collection('delete-jobs');
    app.use(express.json())
    app.post('/csv', (req, res) => {
      deleteJobs.insertOne(req.body)
      .then(result => {
        res.redirect('/');
        console.log(result);
      })
      .catch(error => console.error(error))
    })
  })
  .catch(error => console.error(error))
console.log("This better work");
app.listen(3000, function() {
    console.log('listening on 3000')
  })