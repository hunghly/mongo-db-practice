const express = require('express');
const router = express.Router();
const City = require('../models/City');

router.get('/', (req, res, next) => {
    const query = req.query;
    City.find(query)
        .then((cities)=>{
            res.json({
                confirmation: 'success',
                data: cities
            })
        })
        .catch((err)=>{
            res.json({
                confirmation: 'fail',
                data: err.message
            })
        })
})

router.get('/atlanta', (req, res, next)=> {
    res.json({
        confirmation: 'success',
        data: 'you chose Atlanta'
    })
})

module.exports = router;
