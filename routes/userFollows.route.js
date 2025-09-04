const { Router } = require("express");
const { genericController} = require("../controllers");
const { genericMiddleware} = require("../middlewares");
const { UserFollows } = require("../db/models");
const { userFollowsSchema } = require("../schemas");

const router = Router();

router.get("/", genericController.getAllByModel(UserFollows));

router.get(
  "/:id",
  genericMiddleware.existsById(UserFollows),
  genericController.getModelById(UserFollows)
);

router.post(
  "/",
  genericMiddleware.schemaValidator(userFollowsSchema),
  genericController.createNewModel(UserFollows)
);


router.delete(
  "/:id",
  genericMiddleware.existsById(UserFollows),
  genericController.deleteModelById(UserFollows)
);

module.exports = router;