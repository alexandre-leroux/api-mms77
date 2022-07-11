const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const addUser = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    work: String,
    password: { type: String, required: true }
});

addUser.plugin(uniqueValidator);

 module.exports = mongoose.model('User', addUser);