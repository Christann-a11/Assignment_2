var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');

const auth = require('../middleware/auth');

router.get('/', userController.getAll);
router.post('/', userController.create);
router.get('/:userId', userController.getUser);
router.put('/:userId', auth, userController.update);
router.delete('/:userId', auth, userController.remove);
router.delete('/', auth, userController.removeAll);

module.exports = router;
//fixed  merge conflict
