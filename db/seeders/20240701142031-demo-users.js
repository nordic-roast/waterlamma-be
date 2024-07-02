'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      auth0_id: 'auth0|example1',
      name: 'John Doe',
      weight: 75,
      email: 'john.doe@example.com'
    }, {
      auth0_id: 'auth0|example2',
      name: 'Jane Doe',
      weight: 65,
      email: 'jane.doe@example.com'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};


// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     // Define changes to database schema
//   },
//   down: async (queryInterface, Sequelize) => {
//     // Define how to revert the changes
//   }
// };