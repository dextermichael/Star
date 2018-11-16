const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Trip = new Schema({
    title: String,
    description: String,
    date:String ,
    location:String,
    weather:String, 
    equipment:[{
    type: Schema.Types.ObjectId,
    ref: 'Equipment'}]
})

module.exports = mongoose.model('Trip', Trip)
