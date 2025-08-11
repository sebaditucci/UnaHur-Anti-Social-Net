const {User} = require('../db/models');

const existUserByNickname = async (req, res, next) => {
    const nickname = req.params.nickName;
    const user = await User.findOne({ where: { nickname } });
    if (!user) {
        return res.status(400).json({message: `No se encontró ningún usuario con el nombre ${nickname}`})
    }
    next();
}

const validateUniqueUser = async (req, res, next) => {
    const {nickname, email} = req.body;
    const existNickname = await User.findOne({where: {nickname}});
    const existEmail = await User.findOne({where: {email}});
    if (existNickname) {
        return res.status(409).json({message: "Este nickname ya esta en uso"});
    }
    if(existEmail) {
        return res.status(409).json({message: "Este email ya esta en uso"});
    }
    next();
}

module.exports = {existUserByNickname, validateUniqueUser};