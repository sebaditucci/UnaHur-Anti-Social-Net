const {Router} = require('express');
const router = Router();
const {userController} = require('../controllers');
const {userMiddleware} = require('../middlewares');

router.get('/', userController.getUsers);
router.get('/:nickname', userMiddleware.existUserByNickname ,userController.getUserByNickname);
router.post('/', userController.createUser);
router.put('/:nickname', userController.putUserByNickname);
router.delete('/:nickname', userController.deleteUserByNickname);

module.exports = router;
