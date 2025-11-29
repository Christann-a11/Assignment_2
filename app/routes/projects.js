var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projects');


const auth = require('../middleware/auth');


router.get('/', projectController.getAll);
router.post('/', auth, projectController.create);
router.get('/:projectId', projectController.getProject);
router.put('/:projectId', auth, projectController.update);
router.delete('/:projectId', auth, projectController.remove);
router.delete('/', auth, projectController.removeAll);


module.exports = router;
