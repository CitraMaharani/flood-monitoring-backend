'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('water_levels', [
      { id: 2, sensor_id: 'sensor01', distance_cm: 263.76, timestamp: '2025-08-03 23:06:26', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, sensor_id: 'sensor01', distance_cm: 263.36, timestamp: '2025-08-03 23:06:36', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, sensor_id: 'sensor01', distance_cm: 263.35, timestamp: '2025-08-03 23:06:55', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, sensor_id: 'sensor01', distance_cm: 267.04, timestamp: '2025-08-03 23:07:05', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, sensor_id: 'sensor01', distance_cm: 263.35, timestamp: '2025-08-03 23:07:16', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, sensor_id: 'sensor01', distance_cm: 263.36, timestamp: '2025-08-03 23:07:26', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, sensor_id: 'sensor01', distance_cm: 263.4,  timestamp: '2025-08-03 23:08:01', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, sensor_id: 'sensor01', distance_cm: 263.74, timestamp: '2025-08-03 23:08:11', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, sensor_id: 'sensor01', distance_cm: 263.4, timestamp: '2025-08-03 23:08:21', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, sensor_id: 'sensor01', distance_cm: 263.4, timestamp: '2025-08-03 23:08:31', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, sensor_id: 'sensor01', distance_cm: 280.57, timestamp: '2025-08-06 04:20:58', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, sensor_id: 'sensor01', distance_cm: 281.06, timestamp: '2025-08-06 04:21:08', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, sensor_id: 'sensor01', distance_cm: 276.27, timestamp: '2025-08-06 04:21:18', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, sensor_id: 'sensor01', distance_cm: 20.11,  timestamp: '2025-08-06 04:21:28', createdAt: new Date(), updatedAt: new Date() },
      { id: 16, sensor_id: 'sensor01', distance_cm: 19.94,  timestamp: '2025-08-06 04:21:38', createdAt: new Date(), updatedAt: new Date() },
      { id: 17, sensor_id: 'sensor01', distance_cm: 248.71, timestamp: '2025-08-06 04:21:48', createdAt: new Date(), updatedAt: new Date() },
      { id: 18, sensor_id: 'sensor01', distance_cm: 286.74, timestamp: '2025-08-06 04:22:50', createdAt: new Date(), updatedAt: new Date() },
      { id: 19, sensor_id: 'sensor01', distance_cm: 286.72, timestamp: '2025-08-06 04:24:00', createdAt: new Date(), updatedAt: new Date() },
      { id: 20, sensor_id: 'sensor01', distance_cm: 286.69, timestamp: '2025-08-06 04:24:30', createdAt: new Date(), updatedAt: new Date() },
      { id: 21, sensor_id: 'sensor01', distance_cm: 61.91,  timestamp: '2025-08-06 04:24:40', createdAt: new Date(), updatedAt: new Date() },
      { id: 22, sensor_id: 'sensor01', distance_cm: 41.17,  timestamp: '2025-08-06 04:24:50', createdAt: new Date(), updatedAt: new Date() },
      { id: 23, sensor_id: 'sensor01', distance_cm: 50.18,  timestamp: '2025-08-06 04:25:21', createdAt: new Date(), updatedAt: new Date() },
      { id: 24, sensor_id: 'sensor01', distance_cm: 51.85,  timestamp: '2025-08-06 04:25:41', createdAt: new Date(), updatedAt: new Date() },
      { id: 25, sensor_id: 'sensor01', distance_cm: 48.74,  timestamp: '2025-08-06 04:25:51', createdAt: new Date(), updatedAt: new Date() },
      { id: 26, sensor_id: 'sensor01', distance_cm: 285.84, timestamp: '2025-08-06 04:26:01', createdAt: new Date(), updatedAt: new Date() },
      { id: 27, sensor_id: 'sensor01', distance_cm: 102.87, timestamp: '2025-08-06 04:26:21', createdAt: new Date(), updatedAt: new Date() },
      { id: 28, sensor_id: 'sensor01', distance_cm: 49.35,  timestamp: '2025-08-06 04:26:31', createdAt: new Date(), updatedAt: new Date() },
      { id: 29, sensor_id: 'sensor01', distance_cm: 103.36, timestamp: '2025-08-06 04:26:41', createdAt: new Date(), updatedAt: new Date() },
      { id: 30, sensor_id: 'sensor01', distance_cm: 49.16,  timestamp: '2025-08-06 04:26:51', createdAt: new Date(), updatedAt: new Date() },
      { id: 31, sensor_id: 'sensor01', distance_cm: 47.87,  timestamp: '2025-08-06 04:27:01', createdAt: new Date(), updatedAt: new Date() },
      { id: 32, sensor_id: 'sensor01', distance_cm: 103.33, timestamp: '2025-08-06 04:27:21', createdAt: new Date(), updatedAt: new Date() },
      { id: 33, sensor_id: 'sensor01', distance_cm: 285.38, timestamp: '2025-08-06 04:27:31', createdAt: new Date(), updatedAt: new Date() },
      { id: 34, sensor_id: 'sensor01', distance_cm: 286.2,  timestamp: '2025-08-06 04:27:41', createdAt: new Date(), updatedAt: new Date() },
      { id: 35, sensor_id: 'sensor01', distance_cm: 286.25, timestamp: '2025-08-06 04:27:51', createdAt: new Date(), updatedAt: new Date() },
      { id: 36, sensor_id: 'sensor01', distance_cm: 103.31, timestamp: '2025-08-06 04:28:11', createdAt: new Date(), updatedAt: new Date() },
      { id: 37, sensor_id: 'sensor01', distance_cm: 48.62,  timestamp: '2025-08-06 04:28:21', createdAt: new Date(), updatedAt: new Date() },
      { id: 38, sensor_id: 'sensor01', distance_cm: 102.93, timestamp: '2025-08-06 04:28:31', createdAt: new Date(), updatedAt: new Date() },
      { id: 39, sensor_id: 'sensor01', distance_cm: 102.05, timestamp: '2025-08-06 04:28:41', createdAt: new Date(), updatedAt: new Date() },
      { id: 40, sensor_id: 'sensor01', distance_cm: 285.79, timestamp: '2025-08-06 04:28:52', createdAt: new Date(), updatedAt: new Date() },
      { id: 41, sensor_id: 'sensor01', distance_cm: 19.99,  timestamp: '2025-08-06 04:29:12', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.sequelize.query(`ALTER TABLE water_levels AUTO_INCREMENT = 42;`);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('water_levels', null, {});
  }
};
