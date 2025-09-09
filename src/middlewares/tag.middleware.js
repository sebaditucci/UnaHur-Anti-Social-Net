const {Tag} = require('../db/models');

const validateUniqueTag = async (req, res, next) => {
    const {tagName} = req.body;
    const existTagName = await Tag.findOne({where: {tagName}});
    if (existTagName) {
        return res.status(409).json({message: "Este tagName ya esta en uso"});
    }
    next();
}

module.exports = {validateUniqueTag};