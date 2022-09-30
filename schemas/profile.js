const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
        userId: String,
        title: String,
        level: Number,
        xp: Number
    })

module.exports = mongoose.model('profiles', Schema)