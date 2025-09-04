'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFollows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserFollows.init({
    follower_id: { type: DataTypes.INTEGER},
    following_id: { type: DataTypes.INTEGER}
  }, {
    sequelize,
    modelName: 'UserFollows',
  });
  return UserFollows;
};