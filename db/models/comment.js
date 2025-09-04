'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: {name: "user_id", allowNull: false},
        onDelete: 'CASCADE',
        as: "user"
      });

      Comment.belongsTo(models.Post, {
        foreignKey: {name: "post_id", allowNull: false},
        onDelete: 'CASCADE',
        as: "post"
      })
    }
  }
  Comment.init({
    descripcion: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.INTEGER},
    post_id: {type: DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};