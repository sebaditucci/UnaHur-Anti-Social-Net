const {Router} = require('express');
const {userController, genericController} = require('../controllers');
const {userMiddleware, genericMiddleware} = require('../middlewares');
const {User} = require('../db/models')
const {userSchema} = require('../schemas');

const router = Router();

router.get(
    '/', 
    genericController.getAllByModel(User)
);

router.get(
    '/:nickname',
    userMiddleware.existUserByNickname, 
    userController.getUserByNickname
);

router.post(
    '/', 
    genericMiddleware.schemaValidator(userSchema), 
    userMiddleware.validateUniqueUser,
    genericController.createNewModel(User)
);

router.put(
    '/:nickname',
    genericMiddleware.schemaValidator(userSchema),
    userMiddleware.existUserByNickname,
    userController.putUserByNickname
);

router.delete(
    '/:nickname', 
    userMiddleware.existUserByNickname, 
    userController.deleteUserByNickname
);

module.exports = router;