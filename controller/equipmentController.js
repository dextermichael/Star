const User = require('../models/User')
const Trip = require("../models/Trip")
const Equipment = require("../models/Equipment")



const equipmentController = {
    show: (req, res) => {
        const userId = req.params.userId
        const tripId = req.params.tripId
        const equipmentId = req.params.equipmentId
        Equipment.findById(equipmentId).then((equipment) => {
            res.send(equipment)
        })
    }
}

module.exports = equipmentController