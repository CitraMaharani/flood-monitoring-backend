'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('water_levels', [
      {
        sensor_id: 'sensor01',
        distance_cm: 263.76,
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('water_levels', null, {});
  }
};
