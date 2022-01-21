'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments",
      [{
          eventId: 1,
          userId: 2,
          comment: "mantap bang lanjutkan"
        },
        {
          eventId: 1,
          userId: 2,
          comment: "mantap bang lanjutkan"
        },
        {
          eventId: 2,
          userId: 1,
          comment: "mantap bang lanjutkan"
        },
        {
          eventId: 2,
          userId: 2,
          comment: "mantap bang lanjutkan"
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