'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteCommunityIdentity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FavoriteCommunityIdentity.init({
    CommunityIdentitiesId: DataTypes.INTEGER,
    ShopperId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FavoriteCommunityIdentity',
  });
  return FavoriteCommunityIdentity;
};