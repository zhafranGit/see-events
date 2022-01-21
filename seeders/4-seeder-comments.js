'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments",
      [{
          eventId: 21,
          userId: 2,
          comment: "mantap bang lanjutkan"
        },
        {
          eventId: 21,
          userId: 2,
          comment: "ini komen dari user 2"
        },
        {
          eventId: 22,
          userId: 1,
          comment: "ini komen dari user 1"
        },
        {
          eventId: 22,
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