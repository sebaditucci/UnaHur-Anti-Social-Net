'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post_tag.init({
    post_id: { type: DataTypes.INTEGER },
    tag_id: { type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'Post_tag',
  });
  return Post_tag;
};