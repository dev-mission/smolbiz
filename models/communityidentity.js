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
  CommunityIdentity.init({
    ShopId: DataTypes.INTEGER,
    communityIdentity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CommunityIdentity',
  });
  return CommunityIdentity;
};