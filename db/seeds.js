const User = require('../models/User')
const Trip = require('../models/Trip')
const Equipment = require('../models/Equipment')
const mongoose = require('./connections')

const Camera = new Equipment({
    title: 'Camera',
    description: "Canon 6d",
    quanity: 1
})

const Tent = new Equipment({
    title: 'Tent',
    description: "Red tent",
    quanity: 1
    
})

const Red_moutain = new Trip({
    title: String,
    description: String,
    date:String ,
    location:String,
    weather:String, 
    equipment:[Camera,Tent]
})


const Dexter = new User({
    username: 'dexter',
    password: 'spaceiscool',
    trips: [Red_moutain]
})

User.remove({})
    .then(() => Trip.remove({}))
    .then(() => Equipment.remove({}))
    .then(() => Trip.insertMany([Red_moutain]))
    .then(() => Equipment.insertMany([Camera,Tent]))
    .then(() => Dexter.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 