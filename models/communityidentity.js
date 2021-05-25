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
      CommunityIdentity.belongsToMany(models.Shop, { through: 'ShopCommunityIdentities' });
    }
  };
  CommunityIdentity.init({
    identity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CommunityIdentity',
  });
  return CommunityIdentity;
};