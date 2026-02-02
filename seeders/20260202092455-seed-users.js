'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 17663,
        username: 'admin',
        password: '$2a$10$4cjrZPakEeisRVVckJG9A.Ki85qaMsO7L70pR.8xx3/Kq8AgWoore',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17664,
        username: 'brayyy',
        password: '$2a$10$UH7avZv0rkSwCA7hqLWkJ.XJwkB4tKRKgTsVStUyoblt0AkjqrdGe',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17665,
        username: 'testinguser',
        password: '$2a$10$9GXWD6xfPC9.PyXR3sh/JOkCsk4lib23HRuiszKjOHFrByg7kG1FK',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    await queryInterface.sequelize.query(`ALTER TABLE users AUTO_INCREMENT = 17666;`);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
