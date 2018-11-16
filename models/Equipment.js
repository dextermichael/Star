
const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Equipment = new Schema({
    title: String,
    description:String,
    quanity: Number
})

module.exports = mongoose.model('Equipment', Equipment)