const {User} = require('../db/models');

const existUserByNickname = async (req, res, next) => {
    const nickname = req.params.nickName;
    const user = await User.findOne({ where: { nickname } });
    if (!user) {
        return res.status(400).json({message: `No se encontró ningún usuario con el nombre ${nickname}`})
    }
    next();
}

module.exports = {existUserByNickname};