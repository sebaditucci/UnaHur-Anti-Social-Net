const {Post_tag} = require('../db/models');

const getTagsByPostId = async (req, res) => {
    const post_id = req.params.post_id;
    const tags = await Post_tag.findAll({where: {post_id}});
    res.status(200).json(tags);
}

const getPostsByTagId = async (req, res) => {
    const tag_id = req.params.tag_id;
    const posts = await Post_tag.findAll({where: {tag_id}});
    res.status(200).json(posts);
}

module.exports = {getTagsByPostId, getPostsByTagId};