'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('water_levels', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      sensor_id: {
        type: Sequelize.STRING(50)
      },
      distance_cm: {
        type: Sequelize.FLOAT
      },
      timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('water_levels');
  }
};
