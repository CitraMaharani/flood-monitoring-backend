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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('water_levels');
  }
};
