const { Router } = require("express");
const { genericController, postTagController } = require('../controllers');
const { genericMiddleware, postTagMiddleware } = require('../middlewares');
const { Post_tag } = require("../db/models");
const { postTagSchema } = require("../schemas");

const router = Router();

router.get('/', genericController.getAllByModel(Post_tag));

router.get(
    '/:id',
    genericMiddleware.existsById(Post_tag),
    genericController.getModelById(Post_tag)
);

router.get(
    '/post/:post_id',
    postTagMiddleware.existTagsByPostId,
    postTagController.getTagsByPostId
)

router.get(
    '/tag/:tag_id',
    postTagMiddleware.existPostsByTagId,
    postTagController.getPostsByTagId
)

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