'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shopper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Shopper.init({
    UserId: DataTypes.STRING,
    points: DataTypes.INTEGER,
    zipCode: DataTypes.INTEGER,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Shopper',
  });
  return Shopper;
};