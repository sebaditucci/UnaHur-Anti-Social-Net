const {Router} = require('express');
const {userController, genericController} = require('../controllers');
const {userMiddleware} = require('../middlewares');
const {User} = require('../db/models')

const router = Router();

router.get('/', genericController.getAllByModel(User));
router.get('/:nickname', userMiddleware.existUserByNickname, userController.getUserByNickname);
router.post('/', userMiddleware.validateUniqueUser ,genericController.createNewModel(User));
router.put('/:nickname', userMiddleware.existUserByNickname, userController.putUserByNickname);
router.delete('/:nickname', userMiddleware.existUserByNickname, userController.deleteUserByNickname);

module.exports = router;
