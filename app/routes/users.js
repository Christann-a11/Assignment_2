var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');

<<<<<<< HEAD
const auth = require('../middleware/auth');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:userId', userController.getUser);
router.put('/:userId', auth, userController.update);
router.delete('/:userId', auth, userController.remove);
router.delete('/', auth, userController.removeAll);
=======
router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:userId', userController.getUser);
router.put('/:userId', userController.update);
router.delete('/:userId', userController.remove);
router.delete('/', userController.removeAll);
>>>>>>> 9ca08161849e86f9901efd5e4cb5bf18ac0035d1

module.exports = router;
