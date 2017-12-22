var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var RateLimit = require('express-rate-limit');


var limiter = new RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 2,
    delayMs: 0,
});

router.post('/', function (req, res, next) {
    var user = new User({
        password:   bcrypt.hashSync(req.body.password,10),
        username: req.body.username,
        lowercase: req.body.lowercase,
        uppercase: req.body.uppercase,
        specialChars: req.body.specialChars,
        numericValues: req.body.numericValues,
        passwordLength: req.body.passwordLength
    });

    user.save(function(err,result){
        if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        };
        res.status(201).json({
            message: 'User successfully created!',
            obj: result
        });
    });
});

router.get('/:id', function(req,res,next){

    User.findById({_id: req.params.id}, function(err, user){
        console.log(req.params.id);

        if(err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        };

        res.status(200).json({
            message: 'User!',
            obj: user
        });
    });
});


router.post('/signin', limiter ,function(req, res, next){

    User.findOne({username: req.body.username}, function(err, user){
            if(err){
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            };


            // console.log(err);

            if(err){
                return res.status(429).json({
                    title: 'Suspected Brute force attack',
                    error: {message: 'Suspected Brute force attack, this IP will be blocked for one minute' }
                })
            }

             if(!user){
                return res.status(401).json({
                    title: 'Login failed' ,
                    error: {message: 'Invalid login credentials' }
                });
            };
            if(!bcrypt.compareSync(req.body.password, user.password)){
                 return res.status(500).json({
                    title: 'Login failed' ,
                    error: {message: 'Invalid login credentials' }
                });
            }
            //Expires in Two hours
            var token = jwt.sign({user: user}, 'secret', {expiresIn:7200});
            res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id
            });
      });
});

module.exports = router;
