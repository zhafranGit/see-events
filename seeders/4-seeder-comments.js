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
        eventId: 2,
        userId: 2,
        comment: "ini komen dari user 2"
      },
      {
        eventId: 3,
        userId: 1,
        comment: "ini komen dari user 1"
      },
      {
        eventId: 4,
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