var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    password: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    lowercase: {type: Number},
    uppercase: {type: Number},
    specialChars: {type: Number},
    numericValues: {type: Number},
    passwordLength: {type: Number}
});

schema.plugin(mongooseUniqueValidator);

var User = mongoose.model('User', schema);

module.exports = User;