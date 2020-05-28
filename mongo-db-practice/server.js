const express = require('express');
const mongoose = require('mongoose');

// connect to mongoDB using mongoose ORM
mongoose.connect('mongodb://localhost/world', {
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connection Success");
}).catch((err) => {
    console.log(err);
    console.log("error here");
})
const app = express();

app.use('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    res.json({
        confirmation: 'success',
        data: 'This is the Mongo project!'
    })
})

app.listen(5000)
console.log("app running on localhost:5000");
