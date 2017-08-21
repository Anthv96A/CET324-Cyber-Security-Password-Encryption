var express = require('express');
var router = express.Router();
var Group = require('../models/group');
var Candidate = require('../models/candidate');



//Retrieve all groups with associated candidates
router.get('/', function(req, res, next ){
    Group.find().populate('candidates').exec(function(err, results){
        if(err) throw err;

        res.status(200).json({
              message: 'Success',
              groups: results
         });
    });
});

//Find groups by date
router.get('/list/:date',function(req, res, next){
    Group.find({date: new Date(req.params.date).toISOString()}).populate('candidates')
        .exec(function(err, groups){
             if(err){
                return res.status(500).json({
                    title: 'Internal Server error',
                    error: err
                })
             }
              if(!groups){
                return res.status(404).json({
                    title: 'No Group Found!',
                    error: {message: 'Group not found!!'}
                });
            }

            res.status(200).json({
                title:'Groups',
                result: groups
            });
    });
});



router.post('/', function(req, res, next){
    var newGroup = new Group({
        name: req.body.name,
        date: req.body.date,
        candidates: req.body.candidates
    });
    newGroup.save(function(err, result){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
             message: 'Success',
             group: result
        });
    });

});



module.exports = router;


