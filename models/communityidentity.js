'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommunityIdentity extends Model {
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
    ShopId: DataTypes.INTEGER,
    identities: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CommunityIdentity',
  });
  return CommunityIdentity;
};