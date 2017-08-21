var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');
var Group = require('../models/group');



//Retrieve all candidates
router.get('/', function(req, res, next ){
    Candidate.find().populate('Group').exec(function(err, results){
        if(err) throw err;

        res.status(200).json({
              message: 'Success',
              candidates: results
         });

         console.log(results);
    });
});

//Fetch candidate by id
router.get('/:id', function(req, res, next){
    // Candidate.findById({_id: req.params.id}, function(err, candidate){
    //     if(err){
    //         return res.status(500).json({
    //             title: 'An error occurred',
    //             error: err
    //         });
    //     };

    //     res.status(200).json({
    //         title: 'Success',
    //         candidate: candidate
    //     });

    // });

    Candidate.findById({_id: req.params.id}).populate('Group').exec(function(err,candidate){
            if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        };

        res.status(200).json({
            title: 'Success',
            candidate: candidate
        });
        
    });

});



//Find candidates by date
router.get('/allocation/:assessmentDate',function(req, res, next){
    Candidate.find(
        {assessmentDate: new Date(req.params.assessmentDate).toISOString()}, function(err, candidates){
        if(err){
            return res.status(500).json({
                title: 'Internal Server error',
                error: err
            })
        }

       if(!candidates){
             return res.status(404).json({
                title: 'No Candidate Found!',
                error: {message: 'Candidates not found!!'}
            });
        }

        res.status(200).json({
            title:'Candidates',
            result: candidates
        });
    });
});


//New candidate
router.post('/', function(req, res, next){ 

    var newCandidate = new Candidate({
        name: req.body.name,
        university: req.body.university,
        degree: req.body.degree,
        assessmentDate: req.body.assessmentDate,
       // assessmentGroup: req.body.assessmentGroup
    });
    newCandidate.save(function(err, result){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
             message: 'Success',
             candidates: result
        });
    });
});


//Update Candidate
router.put('/:id', function(req, res, next){
    var id = req.params.id;
    Candidate.findOne({_id: id}, function(err, found){
        if(err){
              return res.status(500).json({
                    title: 'An error occurred',
                    error: err
             });
        }
        if(!found){
             return res.status(404).json({
                title: 'No Candidate Found!',
                error: {message: 'Candidate not found'}
            });
        }
            found.name = req.body.name;
            found.university = req.body.university;
            found.degree = req.body.degree;
            found.assessmentDate = req.body.assessmentDate;
            found.assessmentGroup = req.body.assessmentGroup;

        found.save(function(err, updatedObj){
            if(err){
                return res.status(500).json({
                    title: "Some other error occured",
                    error: err
                })
            }
             res.status(202).json({
                title: 'Candidate updated!',
                obj: updatedObj
              });
        });
    });
 });

//Delete candidate
router.delete('/:id', function(req, res, next){
    Candidate.findById(req.params.id, function (err, candidate) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!candidate) {
            return res.status(500).json({
                title: 'No Candidate Found!',
                error: {message: 'Candidate not found'}
            });
        }
        candidate.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted Candidate',
                candidates: result
            });
        });
    });
});
module.exports = router;