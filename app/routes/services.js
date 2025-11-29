var express = require('express');
var router = express.Router();
var serviceController = require('../controllers/services');

<<<<<<< HEAD

const auth = require('../middleware/auth');

router.get('/', serviceController.getAll);
router.post('/', auth, serviceController.create);
router.get('/:serviceId', serviceController.getService);
router.put('/:serviceId', auth, serviceController.update);
router.delete('/:serviceId', auth, serviceController.remove);
router.delete('/', auth, serviceController.removeAll);
=======
router.get('/', serviceController.getAll);
router.post('/', serviceController.create);
router.get('/:serviceId', serviceController.getService);
router.put('/:serviceId', serviceController.update);
router.delete('/:serviceId', serviceController.remove);
router.delete('/', serviceController.removeAll);
>>>>>>> 9ca08161849e86f9901efd5e4cb5bf18ac0035d1

module.exports = router;
