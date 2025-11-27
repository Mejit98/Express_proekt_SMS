const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/scoobyMongoose2025');

var schema = mongoose.Schema({ name: String })

schema.methods.gav = function(){
   console.log(this.name + " сказал гав")
}

const Scooby = mongoose.model('Scooby', schema);

const scoobyEntry = new Scooby({ name: 'Скуби-ду' });

scoobyEntry.save().then(() => scoobyEntry.gav());

