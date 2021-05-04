'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteCommunityIdentities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FavoriteCommunityIdentities.init({
    CommunityIdentitiesID: DataTypes.INTEGER,
    ShopperID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavoriteCommunityIdentities',
  });
  return FavoriteCommunityIdentities;
};