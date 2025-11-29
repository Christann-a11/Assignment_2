var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projects');

<<<<<<< HEAD
const auth = require('../middleware/auth');


router.get('/', projectController.getAll);
router.post('/', auth, projectController.create);
router.get('/:projectId', projectController.getProject);
router.put('/:projectId', auth, projectController.update);
router.delete('/:projectId', auth, projectController.remove);
router.delete('/', auth, projectController.removeAll);
=======
router.get('/', projectController.getAll);
router.post('/', projectController.create);
router.get('/:projectId', projectController.getProject);
router.put('/:projectId', projectController.update);
router.delete('/:projectId', projectController.remove);
router.delete('/', projectController.removeAll);
>>>>>>> 9ca08161849e86f9901efd5e4cb5bf18ac0035d1

module.exports = router;
