const express = require('express');
const router = express.Router();
const Country = require('../models/Country');

router.get('/', (req, res, next)=> {
    const query = req.query;
    console.log(query);
    Country.find(query)
        .then((countries)=> {
            res.json({
                confirmation: 'success',
                data: countries
            })
        })
        .catch((err)=>{
            res.json({
                confirmation: 'fail',
                data: err.message
            })
        });

})

router.get('/:id', (req, res, next)=>{
    console.log("id:" + req.params.id);
    Country.findById(req.params.id)
        .then((country)=>{
            res.json({
                confirmation: 'success',
                data: country
            })
        })
        .catch((err)=>{
            res.json({
                confirmation: 'fail',
                message: 'failed to find Country with id: ' + req.param.id
            })
        })
})

module.exports = router;