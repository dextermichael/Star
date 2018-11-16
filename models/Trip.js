const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Trip = new Schema({
    title: String,
    notes: String,
    date: String,
    location:String,
    weather:String, 
    equipment:[{
    type: Schema.Types.ObjectId,
    ref: 'Equipment'}]
})

module.exports = mongoose.model('Trip', Trip)
