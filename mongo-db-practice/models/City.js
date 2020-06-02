const mongoose = require('mongoose');

const City = new mongoose.Schema({
    name: {type:String, default: ''},
    continent: {type:String, default: ''},
    population: {type:Number, default: ''}
});

module.exports = mongoose.model('City', City);