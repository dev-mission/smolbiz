'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoutouts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shoutouts.init({
    UserID: DataTypes.INTEGER,
    ShopID: DataTypes.INTEGER,
    creationDate: DataTypes.DATE,
    shoutoutText: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Shoutouts',
  });
  return Shoutouts;
};