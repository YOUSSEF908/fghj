const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    userId: String,
    reps: Number
})

module.exports = mongoose.model('reps', Schema)