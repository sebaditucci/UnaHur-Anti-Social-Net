const userSchema = require('./user.schema');
const postSchema = require('./post.schema');
const postImageSchema = require('./post_image.schema');
const commentSchema = require('./comment.schema');
const tagSchema = require('./tag.schema');
const postTagSchema = require('./post_tag.schema');
const userFollowsSchema = require('./userFollows.schema');

module.exports = {userSchema, postSchema, postImageSchema, commentSchema, tagSchema, postTagSchema, userFollowsSchema};