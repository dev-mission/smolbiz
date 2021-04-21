'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.INTEGER
      },
      shopName: {
        type: Sequelize.STRING
      },
      websiteURL: {
        type: Sequelize.STRING
      },
      locationAddress: {
        type: Sequelize.STRING
      },
      shopDescription: {
        type: Sequelize.STRING
      },
      ownerBio: {
        type: Sequelize.TEXT
      },
      businessHours: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Shops');
  }
};