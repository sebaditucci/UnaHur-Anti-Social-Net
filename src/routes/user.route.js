const {Router} = require('express');
const {genericController} = require('../controllers');
const {userMiddleware, genericMiddleware} = require('../middlewares');
const {User} = require('../db/models')
const {userSchema} = require('../schemas');

const router = Router();

router.get(
    '/', 
    genericController.getAllByModel(User)
);

router.get(
    '/:id',
    genericMiddleware.existsById(User), 
    genericController.getModelById(User)
);

router.post(
    '/', 
    genericMiddleware.schemaValidator(userSchema), 
    userMiddleware.validateUniqueUser,
    genericController.createNewModel(User)
);

router.put(
    '/:id',
    genericMiddleware.schemaValidator(userSchema),
    genericMiddleware.existsById(User),
    userMiddleware.validateUniqueUser,
    genericController.putModelById(User)
);

router.delete(
    '/:id', 
    genericMiddleware.existsById(User), 
    genericController.deleteModelById(User)
);

module.exports = router;