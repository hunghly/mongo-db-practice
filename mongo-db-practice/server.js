const express = require('express');
const mongoose = require('mongoose');
const cities = require('./routes/cities');
const countries = require('./routes/countries');

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
app.use('/cities', cities);
app.use('/countries', countries);

app.listen(5000)
console.log("app running on localhost:5000");
