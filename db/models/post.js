'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: {name: "user_id", allowNull: false},
        as: "user"
      });

      Post.hasMany(models.Post_image, {
        foreignKey: "post_id",
        as: "post_images"
      });

      Post.hasMany(models.Comment, {
        foreignKey: "post_id",
        as: "comments"
      });

      Post.belongsToMany(models.Tag, {
        through: models.Post_tag,
        foreignKey: "post_id",
        as: "tags"
      });
    }
  }
  Post.init({
    descripcion: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};