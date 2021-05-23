'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('OwnerShopPhotos', {
      fields: ['ShopId'],
      type: 'FOREIGN KEY',
      references: {
        table: 'Shops',
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
    await queryInterface.removeConstraint('OwnerShopPhotos', 'OwnerShopPhotos_ShopId_Shops_fk');
  }
};
