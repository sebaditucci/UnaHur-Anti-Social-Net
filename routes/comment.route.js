const {Router} = require('express');
const {genericController} = require('../controllers');
const {Comment} = require('../db/models');
const {genericMiddleware} = require('../middlewares');


const router = Router();

router.get('/', genericController.getAllByModel(Comment));
router.get('/:id', genericMiddleware.existsById(Comment), genericController.getModelById(Comment));
router.post('/', genericController.createNewModel(Comment));
router.put(':/id', genericMiddleware.existsById(Comment), genericController.putModelById(Comment));
router.delete(':id', genericMiddleware.existsById(Comment), genericController.deleteModelById(Comment));

module.exports = router;