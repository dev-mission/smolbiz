'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SmolBizUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SmolBizUser.init({
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    photo: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SmolBizUser',
  });
  return SmolBizUser;
};