var express = require('express');
var router = express.Router();
const applicationController = require("../controller/application")
const userController = require('../controller/user')
const tripController = require('../controller/trip')
const equipmentController = require('../controller/equipment')





/* GET home page. */
router.get('/', applicationController.index)
// router.get('/users',usersController.index)


//User controller 
router.get('/user',userController.index)
// 
router.get('/user/new',userController.new)
//show
router.get('/user/:id',userController.show)
//
router.get('/user/:id/edit',userController.edit)
//create
router.post('/user',userController.create)
// delete
router.delete('/user/:id',userController.delete)
// update
router.patch('/user/:id',userController.update)


// //Skill

router.get ('/trip',tripController.index)
router.get ('/trip/new',tripController.new)
router.get ('/trip/:id',tripController.show)
router.get('/trip/:id/edit',tripController.edit) 
router.post('/trip',tripController.create) 
router.patch('/trip/:id',tripController.update)
router.delete('/trip/:id',tripController.delete)


// //task

router.get('/equipment',equipmentController.index)
router.get ('/equipment/new',equipmentController.new)
router.get ('/equipment/:id',equipmentController.show)
router.post('/equipment',equipmentController.create) 
router.get('/equipment/:id/edit',equipmentController.edit) 
router.patch('/equipment/:id',equipmentController.update)



module.exports = router;
