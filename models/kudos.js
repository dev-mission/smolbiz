'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kudos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Kudos.init({
    ShopperID: DataTypes.INTEGER,
    ShoutoutID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Kudos',
  });
  return Kudos;
};