'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('water_levels', [
      { id: 2, sensor_id: 'sensor01', distance_cm: 263.76, timestamp: '2025-08-03 23:06:26', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, sensor_id: 'sensor01', distance_cm: 263.36, timestamp: '2025-08-03 23:06:36', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, sensor_id: 'sensor01', distance_cm: 263.35, timestamp: '2025-08-03 23:06:55', createdAt: new Date(), updatedAt: new Date() },
      // lanjutkan semua sampai id 41 (copy persis dari SQL dump)
    ]);

    await queryInterface.sequelize.query(
      `ALTER TABLE water_levels AUTO_INCREMENT = 42;`
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('water_levels', null, {});
  }
};
