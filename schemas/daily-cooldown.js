const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    userId: String,
    coolDown: Number
});

module.exports = mongoose.model('daily-cooldown', Schema);