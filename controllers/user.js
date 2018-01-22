var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var RateLimit = require('express-rate-limit');


var limiter = new RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 2, // 2 for demo purposes
    delayMs: 0,
});


router.put('/:username', function(req, res, next){

    User.findOne({username: req.body.username}, function(err, user){
        if(err){
            return res.status(500).json({
                title: 'Something went wrong',
                error: err
            });
        }

        if(!user){
            return res.status(401).json({
                title: 'User not found',
                error: {message: req.body.username + ' does not exist.'}
            })
        }

        if(!bcrypt.compareSync(req.body.oldPassword, user.password)){
            return res.status(500).json({
               title: 'Login failed' ,
               error: {message: 'Invalid login credentials' }
           });
       }

       if(user.oldPassword != null){
            if(bcrypt.compareSync(req.body.password, user.oldPassword)){
                return res.status(500).json({
                    title: "Password change failed",
                    error: {message: "Your new password can't be the same as old password"}
                })
            }
       }

    if(bcrypt.compareSync(req.body.password, user.password)){
            return res.status(500).json({
                title: "Duplicate password",
                error: {message: "Your old password is the same your new password"}
            })
        }
   

       user.username = req.body.username;
       user.oldPassword = user.password;
       user.password = bcrypt.hashSync(req.body.password,10); // The 10 is the strength of the algorithm
       user.lowercase = req.body.lowercase;
       user.uppercase = req.body.uppercase;
       user.specialChar = req.body.specialChars;
       user.numericValues = req.body.numericValues;
       user.passwordLength = req.body.passwordLength;


       user.save(function(err, updated){
        if(err){
            return res.status(500).json({
                title: "Some other error occured",
                error: err
            })
        }
        res.status(202).json({
            message: 'User successfully updated!',
            obj: updated
          });
       });
    });
});

router.post('/', function (req, res, next) {
    var user = new User({
        password:   bcrypt.hashSync(req.body.password,10), // The 10 is the strength of the algorithm
        oldPassword:  bcrypt.hashSync(req.body.password,10),
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
            if(err){
                return res.status(429).json({
                    title: 'Suspected Brute force attack',
                    error: {message: 'Suspected Brute force attack, this IP will be blocked for one minute' }
                })
            };
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
