const genericMiddleware = require('./generic.middleware');
const userMiddleware = require('./user.middleware');
const tagMiddleware = require('./tag.middleware');
const postTagMiddleware = require('./post_tag.middleware');

module.exports = {genericMiddleware, userMiddleware, tagMiddleware, postTagMiddleware};