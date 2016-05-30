'use strict';


var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    client = require('./app/models/client.js'),
    prop = require('./app/models/prop.js'),
    methodOverride = require('method-override'),
    db = require('./config/db');

const port = process.env.PORT || 4444;

mongoose.connect(db.url);

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

console.log('prop app is running on port: ', port);

exports = module.exports = app;
