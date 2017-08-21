var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidateSchema = new Schema({
         name: { type: String, required: true},
         university: { type: String, required: true},
         degree: { type: String, required: true},
         assessmentDate: { type: Date },
         assessmentGroup: {
             type: Schema.Types.ObjectId,
             ref: 'Group'
            }
})

var Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;
