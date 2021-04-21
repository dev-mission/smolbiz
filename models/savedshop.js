'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SavedShop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SavedShop.init({
    ShopperID: DataTypes.INTEGER,
    ShopID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SavedShop',
  });
  return SavedShop;
};