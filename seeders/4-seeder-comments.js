'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments",
      [
        {
          eventId: 1,
          userId: 2,
          commentDesc: "mantap bang lanjutkan"
        },
        {
          eventId: 1,
          userId: 2,
          commentDesc: "mantap bang lanjutkan"
        },
        {
          eventId: 2,
          userId: 1,
          commentDesc: "mantap bang lanjutkan"
        },
        {
          eventId: 2,
          userId: 2,
          commentDesc: "mantap bang lanjutkan"
        },
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