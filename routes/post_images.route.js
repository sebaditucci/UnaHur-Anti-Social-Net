const {Router} = require('express');
const {genericController} = require('../controllers');
const {Post_image} = require('../db/models');
const {genericMiddleware} = require('../middlewares');

const router = Router(); 

router.get('/', genericController.getAllByModel(Post_image));
router.get('/:id', genericMiddleware.existsById(Post_image), genericController.getModelById(Post_image));
router.post('/', genericController.createNewModel(Post_image));
router.put(':/id', genericMiddleware.existsById(Post_image), genericController.putModelById(Post_image));
router.delete(':id', genericMiddleware.existsById(Post_image), genericController.deleteModelById(Post_image));

module.exports = router;