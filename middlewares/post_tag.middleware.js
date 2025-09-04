const {Post_tag} = require('../db/models');

const existPostsByTagId = async (req, res, next) => {
    const tag_id = req.params.tag_id;
    if (tag_id <= 0) {
        return res.status(400).json({message: "El id del tag no puede ser negativo"});
    }
    const post = await Post_tag.findOne({where: {tag_id}});
    if (!post) {
        return res.status(404).json({message: `no se encontro ningún post asociado al tag ${tag_id}`});
    }
    next();
}

const existTagsByPostId = async (req, res, next) => {
    const post_id = req.params.post_id;
    if (post_id <= 0) {
        return res.status(400).json({message: "El id del post no puede ser negativo"});
    }
    const tag = await Post_tag.findOne({where: {post_id}});
    if (!tag) {
        return res.status(404).json({message: `no se encontro ningún tag asociado al post ${post_id}`});
    }
    next();
}

module.exports = {existPostsByTagId, existTagsByPostId};