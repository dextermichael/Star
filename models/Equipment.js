
const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Equipment = new Schema({
    tile: String,
    descripttion:String,
    quanity: Number
})

module.exports = mongoose.model('Equipment', Equipment)