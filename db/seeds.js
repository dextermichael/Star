const User = require('../models/User')
const Trip = require('../models/Trip')
const Equipment = require('../models/Equipment')
const mongoose = require('./connection')

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
    title: "Red Mountain",
    notes: "Beware of greased up deaf guy"  ,
    date:"12/31/1988",
    location: "50 Lodge Rd SE, Cartersville, GA 30121",
    weather:"Rainy", 
    equipment:[Camera,Tent]
})


const Dexter = new User({
    username: 'dexter',
    password: 'spaceiscool',
    trip: [Red_moutain]
})

User.remove({})
    .then(() => Trip.remove({}))
    .then(() => Equipment.remove({}))
    .then(() => Trip.insertMany([Red_moutain]))
    .then(() => Equipment.insertMany([Camera,Tent]))
    .then(() => Dexter.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 