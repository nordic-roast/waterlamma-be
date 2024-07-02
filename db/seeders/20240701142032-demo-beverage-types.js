'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('beverageTypes', [{
      name: 'Water'
    }, {
      name: 'Juice'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('beverageTypes', null, {});
  }
};