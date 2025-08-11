const {Router} = require('express');
const {genericController} = require('../controllers');
const {Tag} = require('../db/models');
const {genericMiddleware, tagMiddleware} = require('../middlewares');

const router = Router();

router.get('/', genericController.getAllByModel(Tag));
router.get('/:id', genericMiddleware.existsById(Tag), genericController.getModelById(Tag));
router.post('/', tagMiddleware.validateUniqueTag, genericController.createNewModel(Tag));
router.put(':/id', genericMiddleware.existsById(Tag), genericController.putModelById(Tag));
router.delete(':id', genericMiddleware.existsById(Tag), genericController.deleteModelById(Tag));

module.exports = router;