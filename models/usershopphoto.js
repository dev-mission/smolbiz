'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserShopPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserShopPhoto.init({
    ShopId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    ShoutoutId: DataTypes.INTEGER,
    fileImage: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserShopPhoto',
  });
  return UserShopPhoto;
};