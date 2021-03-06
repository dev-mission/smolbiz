'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OwnerShopPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OwnerShopPhoto.belongsTo(models.Shop);
    }
  };
  OwnerShopPhoto.init({
    fileImage: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OwnerShopPhoto',
  });
  return OwnerShopPhoto;
};
