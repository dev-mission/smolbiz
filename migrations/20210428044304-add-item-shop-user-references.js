'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addConstraint('Items', {
      fields: ['ShopId'],
      type: 'FOREIGN KEY',
      references: {
        table: 'Shops',
        field: 'id'
      }
    });
     await queryInterface.addConstraint('Items', {
      fields: ['UserId'],
      type: 'FOREIGN KEY',
      references: {
        table: 'Users',
        field: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Items', 'Items_ShopId_Shops_fk');
    await queryInterface.removeConstraint('Items', 'Items_UserId_Users_fk');
  }
};
