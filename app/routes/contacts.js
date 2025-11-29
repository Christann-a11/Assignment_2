var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contacts');

const auth = require('../middleware/auth');

router.get('/', contactController.getAll);
router.post('/', auth, contactController.create);
router.get('/:contactId', contactController.getContact);
router.put('/:contactId', auth, contactController.update);
router.delete('/:contactId', auth, contactController.remove);
router.delete('/', auth, contactController.removeAll);

module.exports = router;
