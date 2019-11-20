var express = require('express');
var cors = require ('cors');
var mongoose = require('mongoose');
var schema = require ('./routes/schema');
var ApplicantInfo = schema.ApplicantInfo;
var app = express();

app.use (cors());

var uri = "mongodb+srv://asdf:asdf@cluster0-v4e3c.mongodb.net/applicant?retryWrites=true&w=majority";

mongoose.connect(uri , {useNewUrlParser : true});
var db = mongoose.connection;
db.on('open' , function () {
    console.log('hello')
});


var form = new ApplicantInfo ({name:'hamid' , father : "mustaq"});
form.save(function (error,data) {
    console.log(error);
    console.log(data);
    console.log('hello');

})



ApplicantInfo.find(function (error,data) {
    console.log(error);
    console.log(data);
});



app.get( '/get' , function (req , res) {

  ApplicantInfo.find().exec(function (error,data) {
        res.send({error : error , data : data});
        console.log(error);
        console.log(data);
    })
});

app.post ( '/post' , function (req , res) {

    var form = new ApplicantInfo (req.body);
    form.save(function (error,data) {
        res.send ({error : error ,  data : data});
        console.log(error);
        console.log(data);
        console.log('hello');

    })

})


app.set('port' , process.env.PORT || 4000);
var server = app.listen( app.get('port'), function () {
console.log('Express server is listening on port' + server.address().port);
});



