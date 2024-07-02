'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HydrationEntries', [{
      userID: 1, // Assuming user ID 1 is valid
      beverageTypeID: 1, // Assuming beverage type ID 1 (Water) is valid
      amount: '500ml',
      dateTime: new Date('2024-01-01T10:00:00Z')
    }, {
      userID: 1, // Same user, different beverage
      beverageTypeID: 2, // Assuming beverage type ID 2 (Juice) is valid
      amount: '300ml',
      dateTime: new Date('2024-01-01T15:00:00Z')
    }, {
      userID: 2, // Another user
      beverageTypeID: 1,
      amount: '750ml',
      dateTime: new Date('2024-01-02T08:30:00Z')
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HydrationEntries', null, {});
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