const express = require('express');
const mongoose = require('mongoose');
const City = require('./models/City');
const Country = require('./models/Country');

// connect to mongoDB using mongoose ORM
mongoose.connect('mongodb://localhost/world', {
    useUnifiedTopology: true
}).then((data) => {
    console.log("MongoDB Connection Success");
}).catch((err) => {
    console.log(err);
    console.log("error here");
})
const app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    res.json({
        confirmation: 'success',
        data: 'This is the Mongo project!'
    })
})

app.get('/cities', function(req, res, next) {
    City.find(null)
        .then((cities)=> {
            res.json({
                confirmation: 'success',
                data: cities
            })
        })
        .catch((err)=>{
            res.json({
                confirmation: 'fail',
                message: err.message
            })
    })
})

app.get('/countries', (req, res, next)=>{
    Country.find(null)
        .then((countries)=> {
            res.json({
                confirmation: 'success',
                data: countries
            })
        })
        .catch((err)=>{
            res.json({
               confirmation: 'fail',
               message: err.message
            });
        })
})

app.listen(5000)
console.log("app running on localhost:5000");
