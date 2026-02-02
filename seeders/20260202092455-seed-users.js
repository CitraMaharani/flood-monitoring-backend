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
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
