const {User} = require('../db/models');

const validateUniqueUser = async (req, res, next) => {
    const {nickname, email} = req.body;
    const id = req.params.id;
    const existNickname = await User.findOne({where: {nickname}});
    const existEmail = await User.findOne({where: {email}});
    const user = await User.findByPk(id);
    if (existNickname && user.nickname != nickname) {
        return res.status(409).json({message: "Este nickname ya esta en uso"});
    }
    if(existEmail && user.email != email) {
        return res.status(409).json({message: "Este email ya esta en uso"});
    }
    next();
}

module.exports = {validateUniqueUser};