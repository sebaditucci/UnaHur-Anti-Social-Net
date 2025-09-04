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
        onDelete: "CASCADE",
        as: "user"
      });

      Post.hasMany(models.Post_image, {
        foreignKey: "post_id",
        onDelete: "CASCADE",
        as: "post_images"
      });

      Post.hasMany(models.Comment, {
        foreignKey: "post_id",
        onDelete: "CASCADE",
        as: "comments"
      });

      Post.belongsToMany(models.Tag, {
        through: models.Post_tag,
        onDelete: "CASCADE",
        foreignKey: "post_id",
        as: "tags"
      });
    }
  }
  Post.init({
    descripcion: {type: DataTypes.STRING, allowNull: false},
    user_id : {type: DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};