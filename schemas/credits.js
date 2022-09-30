const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    userId: String,
    credits: Number
})

module.exports = mongoose.model('diamonds', Schema)