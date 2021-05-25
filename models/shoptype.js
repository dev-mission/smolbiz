'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShopType.belongsToMany(models.Shop, { through: 'ShopShopTypes' });
    }
  };
  ShopType.init({
    typeOfStore: DataTypes.STRING,
    ShopId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShopType',
  });
  return ShopType;
};