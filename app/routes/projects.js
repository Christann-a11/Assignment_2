var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projects');

router.get('/', projectController.getAll);
router.post('/', projectController.create);
router.get('/:projectId', projectController.getProject);
router.put('/:projectId', projectController.update);
router.delete('/:projectId', projectController.remove);
router.delete('/', projectController.removeAll);

module.exports = router;
