'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: "user_id",
        as: "posts",
      });

      User.hasMany(models.Comment, {
        foreignKey: "user_id",
        as: "comments",
      });

      User.belongsToMany(models.User, {
        through: "User_follows",         
        as: "following",                 
        foreignKey: "follower_id",
        otherKey: "following_id"
      });

      User.belongsToMany(models.User, {
        through: "User_follows",     
        as: "followers",                
        foreignKey: "following_id",
        otherKey: "follower_id"
      });
    }
  }
  User.init({
    nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    fechaNacimiento: { type: DataTypes.DATEONLY, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};