'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 10;

    while (amount--) {
      const date = new Date();
      data.push({
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber(),
        role: 0,
        createdAt: date,
        updatedAt: date,
      });
    }

    return queryInterface.bulkInsert('Users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', null, {});
  },
};
