'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories",
      [{
          categoryName: "Design"
        },
        {
          categoryName: "Photography"
        },
        {
          categoryName: "Development"
        },
        {
          categoryName: "Marketing"
        },
        {
          categoryName: "Business"
        },
        {
          categoryName: "Lifestyle"
        },
        {
          categoryName: "Music"
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