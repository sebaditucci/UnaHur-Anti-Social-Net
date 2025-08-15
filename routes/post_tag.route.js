const { Router } = require("express");
const { genericController } = require('../controllers');
const { genericMiddleware } = require('../middlewares');
const { Post_tag } = require("../db/models");
const { postTagSchema } = require("../schemas");

const router = Router();

router.get('/', genericController.getAllByModel(Post_tag));

router.get(
    '/:id',
    genericMiddleware.existsById(Post_tag),
    genericController.getModelById(Post_tag)
);

router.post(
    '/',
    genericMiddleware.schemaValidator(postTagSchema),
    genericController.createNewModel(Post_tag)
);

router.delete(
    '/:id',
    genericMiddleware.existsById(Post_tag),
    genericController.deleteModelById(Post_tag)
)

module.exports = router;