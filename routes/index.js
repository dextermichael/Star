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
router.get('api/user',userController.index)
// 
router.get('api/user/new',userController.new)
//show
router.get('api/user/:id',userController.show)
//
router.get('api/user/:id/edit',userController.edit)
//create
router.post('api/user',userController.create)
// delete
router.delete('api/user/:id',userController.delete)
// update
router.patch('api/user/:id',userController.update)


// //Skill

router.get ('api/trip',tripController.index)
router.get ('api/trip/new',tripController.new)
router.get ('api/trip/:id',tripController.show)
router.get('api/trip/:id/edit',tripController.edit) 
router.post('api/trip',tripController.create) 
router.patch('api/trip/:id',tripController.update)
router.delete('api/trip/:id',tripController.delete)


// //task

router.get('api/equipment',equipmentController.index)
router.get ('api/equipment/new',equipmentController.new)
router.get ('api/equipment/:id',equipmentController.show)
router.post('api/equipment',equipmentController.create) 
router.get('api/equipment/:id/edit',equipmentController.edit) 
router.patch('api/equipment/:id',equipmentController.update)



module.exports = router;
