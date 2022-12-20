
const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());
const restaurante = "Tachos do Sousa";
const nome = "Rodrigo Sousa";

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017";
// const dbName = "app_menu";

const mongoose = require("mongoose");

const url = "mongodb://rodrsousa:teste2022@ac-2gmpg43-shard-00-00.xcvcg9r.mongodb.net:27017,ac-2gmpg43-shard-00-01.xcvcg9r.mongodb.net:27017,ac-2gmpg43-shard-00-02.xcvcg9r.mongodb.net:27017/?ssl=true&replicaSet=atlas-wpjnfr-shard-0&authSource=admin&retryWrites=true&w=majority";

const dbName = "app_menu";

const connect = mongoose.connect(url, { dbName: dbName, useNewUrlParser: true, useUnifiedTopology: true});

connect.then((db) => {

    console.log("Connected correctly to server");

    var menu = require("./Controllers/menu_do_dia");

    app.use(function (req, res, next) {
        console.log("Request: " + req.method + " - " + new Date());
        next();
    });

    app.use('/menu', menu);

    app.listen(port, () => console.log(`Restaurante ${restaurante} - porta: ${port}`))

    })


