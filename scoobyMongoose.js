const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/scoobyMongoose2025');


var Scooby = require('./models/scooby-du.js').Scooby


var scooby_1 = new Scooby({
   title: "Велма",
   nick: "velma",

})




scooby_1.save();


