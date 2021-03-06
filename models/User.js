const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({

    username: String,
    password: String,
    email:String,
    trips: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Trip'
        }
    ]
})

module.exports = mongoose.model('User', User)