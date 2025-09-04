'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post_image.belongsTo(models.Post, {
        foreignKey: {name: "post_id", allowNull: false},
        onDelete: 'CASCADE',
        as: "post"
      })
    }
  }
  Post_image.init({
    url: { type: DataTypes.STRING, allowNull: false },
    post_id: {type: DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'Post_image',
  });
  return Post_image;
};