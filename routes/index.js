var express = require('express');
var router = express.Router();
// const applicationController = require("../controller/application")
const userController = require('../controller/userController')
const tripController = require('../controller/tripController')
const equipmentController = require('../controller/equipmentController')





/* GET home page. */
// router.get('/', applicationController.index)
// router.get('/users',usersController.index)


//User controller 
router.get('/api/user', userController.index)
// 
// router.get('/api/user/new', userController.new)
//show
router.get('/api/user/:userId', userController.show)
//
// router.get('/api/user/:id/edit', userController.edit)
//create
router.post('/api/user', userController.create)
// delete
router.delete('/api/user/:userId', userController.delete)
// update
router.patch('/api/user/:userId', userController.update)


// // //Trip

// router.get('/api/user/:userId/trip', tripController.index)

// router.get('/api/user/:userId/trip/:tripId', tripController.show)

// router.post('/api/user/:userId/trip', tripController.create)
// router.patch('/api/user/:userId/trip/:tripId', tripController.update)
// router.delete('/api/user/:userId/trip/:tripId', tripController.delete)


// // //Equipment

// router.get('/api/equipment', equipmentController.index)
// router.get('/api/equipment/new', equipmentController.new)
// router.get('/api/equipment/:id', equipmentController.show)
// router.post('/api/equipment', equipmentController.create)
// router.get('/api/equipment/:id/edit', equipmentController.edit)
// router.patch('/api/equipment/:id', equipmentController.update)



module.exports = router;
