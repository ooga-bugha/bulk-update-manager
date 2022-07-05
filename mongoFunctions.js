const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const bodyParser= require('body-parser');
const connectionString= "mongodb+srv://oogabugha:freshdesk1@cluster0.cxfe42l.mongodb.net/?retryWrites=true&w=majority"
modules.export = {
    mongoDBCreate: function(){
        MongoClient.connect(connectionString, { useUnifiedTopology: true })
        .then(client => {
            app.use(bodyParser.urlencoded({ extended: true }))
            app.post('/quotes', (req, res) => {
                return (req.body['ticketsCSV'][files[0]]);
            })
        })
        .catch(error => console.error(error))
    }
}
