'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shop.init({
    UserID: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER,
    shopName: DataTypes.STRING,
    websiteURL: DataTypes.STRING,
    locationAddress: DataTypes.STRING,
    shopDescription: DataTypes.STRING,
    ownerBio: DataTypes.TEXT,
    businessHours: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Shop',
  });
  return Shop;
};