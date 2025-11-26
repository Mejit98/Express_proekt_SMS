const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/scoobyMongoose2025');

const Scooby = mongoose.model('Scooby', { name: String });
const scoobyEntry = new Scooby({ name: 'Скуби-ду' });
scoobyEntry.save().then(() => console.log('Гав'));

