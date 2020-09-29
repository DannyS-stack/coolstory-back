"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "creative pottery course",
          description: "i can teach you how to make really cool pots",
          backgroundColor: "#d8bfd8",
          color: "#458b74",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rockclimbing",
          description: "join me in my quest to reach the top of mt everest",
          backgroundColor: "#c0d6e4",
          color: "#003366",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("homepages", null, {});
  },
};
