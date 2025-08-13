const {Router} = require('express');
const {genericController} = require('../controllers');
const {Post} = require('../db/models')
const {genericMiddleware} = require('../middlewares');
const {postSchema} = require('../schemas');

const router = Router();

router.get(
    '/', 
    genericController.getAllByModel(Post)
);

router.get(
    '/:id', 
    genericMiddleware.existsById(Post), 
    genericController.getModelById(Post)
);

router.post(
    '/', 
    genericMiddleware.schemaValidator(postSchema), 
    genericController.createNewModel(Post)
);

router.put(
    '/:id', 
    genericMiddleware.schemaValidator(postSchema), 
    genericMiddleware.existsById(Post), 
    genericController.putModelById(Post)
);

router.delete(
    '/:id', 
    genericMiddleware.existsById(Post), 
    genericController.deleteModelById(Post)
);

module.exports = router;