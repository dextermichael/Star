const User = require('../models/User')
const Trip = require("../models/Trip")


const tripController = {
    index: (req, res) => {
        const userId = req.params.userId; // 
        User.findbyId(userId) // calling specific user info  Find specific user
        .populate("trips") 
            .then(user => {
                res.send(user.trips)
            })
    },
    show: (req, res) => {
        const tripsId = req.params.tripsId; // Making it neat 
        Trip.findById(tripsId)
        .populate("equipment")
            .then(trips => {
                res.send(trips)
            })
    },
    update: (req, res) => {
        const tripsId = req.params.tripsId;
        Trip.findByIdAndUpdate(tripsId,req.body, {new: true})
            .then((updatedTrip) => {
                updatedTrip.save()
                res.send(updatedTrip)
            })
    },
    delete: (req, res) => {
        const tripsId = req.params.tripsId;
        Trip.findByIdAndRemove(tripsId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        const userId = req.params.userId;
        User.findById(userId).then(user => {
            Trip.create(req.body).then(newTrip =>{
                user.trips.push(newGame);
                user.save();
                res.send(newTrip);
            });
        });
           
    }
}

module.exports = tripController
