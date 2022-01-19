'use strict';
const { hashPassword } = require('../utils/bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("users",
      [
        {
          firstName: "avan",
          lastName: "the love",
          email: "avanthelove@email.co",
          password: hashPassword("avan"),
        },
        {
          firstName: "tiga",
          lastName: "jeruk",
          email: "tigajeruk@gmail.com",
          password: hashPassword("tigajeruk"),
        }
      ])
  },
  
  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
