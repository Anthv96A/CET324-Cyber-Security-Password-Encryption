var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var groupSchema = new Schema({
    name: { type: String, required: true},
    date: { type: Date, required: true},
    candidates: [{
        type: Schema.Types.ObjectId,
        ref: 'Candidate'
    }]
})

var Group = mongoose.model('Group', groupSchema);

module.exports = Group;
