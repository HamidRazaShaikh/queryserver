var mongoose = require ('mongoose');

var ApplicantSchema = new mongoose.Schema ( {

    name : {type : String , required : true},
    father : {type : String , required : true},
    education : {type : String},
    email : {type : String },
    cell : {type : Number}
});

exports.ApplicantInfo = mongoose.model( 'applicants' , ApplicantSchema)