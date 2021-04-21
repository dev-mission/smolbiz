'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommunityIdentities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CommunityIdentities.init({
    ShopID: DataTypes.INTEGER,
    communityIdentities: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CommunityIdentities',
  });
  return CommunityIdentities;
};