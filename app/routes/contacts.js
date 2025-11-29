var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contacts');

<<<<<<< HEAD
const auth = require('../middleware/auth');

router.get('/', contactController.getAll);
router.post('/', auth, contactController.create);
router.get('/:contactId', contactController.getContact);
router.put('/:contactId', auth, contactController.update);
router.delete('/:contactId', auth, contactController.remove);
router.delete('/', auth, contactController.removeAll);
=======
router.get('/', contactController.getAll);
router.post('/', contactController.create);
router.get('/:contactId', contactController.getContact);
router.put('/:contactId', contactController.update);
router.delete('/:contactId', contactController.remove);
router.delete('/', contactController.removeAll);
>>>>>>> 9ca08161849e86f9901efd5e4cb5bf18ac0035d1

module.exports = router;
