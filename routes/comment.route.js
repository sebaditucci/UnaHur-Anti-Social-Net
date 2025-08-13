const {Router} = require('express');
const {genericController} = require('../controllers');
const {Comment} = require('../db/models');
const {genericMiddleware} = require('../middlewares');
const {commentSchema} = require('../schemas');

const router = Router();

router.get(
    '/', 
    genericController.getAllByModel(Comment)
);

router.get(
    '/:id', 
    genericMiddleware.existsById(Comment), 
    genericController.getModelById(Comment)
);

router.post(
    '/', 
    genericMiddleware.schemaValidator(commentSchema),
    genericController.createNewModel(Comment)
);

router.put(
    '/:id', 
    genericMiddleware.schemaValidator(commentSchema),
    genericMiddleware.existsById(Comment), 
    genericController.putModelById(Comment)
);

router.delete(
    '/:id', 
    genericMiddleware.existsById(Comment), 
    genericController.deleteModelById(Comment)
);

module.exports = router;