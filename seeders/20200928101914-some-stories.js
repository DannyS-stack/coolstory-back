"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "coolest mountain story",
          homepageId: 2,
          content: "dfSGEGWEGGDDDDFFFFF",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DfwokM3I8i93GamFDFdimQHaE8%26pid%3DApi%26h%3D160&f=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "coolest mountain story",
          homepageId: 2,
          content:
            "A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally considered to be steeper than a hill. Mountains are formed through tectonic forces or volcanism.These forces can locally raise the surface of the earth. Mountains erode slowly through the action of rivers, weather conditions, and glaciers.",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DfwokM3I8i93GamFDFdimQHaE8%26pid%3DApi%26h%3D160&f=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cooler mountain story",
          homepageId: 2,
          content:
            "A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally considered to be steeper than a hill. Mountains are formed through tectonic forces or volcanism.These forces can locally raise the surface of the earth. Mountains erode slowly through the action of rivers, weather conditions, and glaciers.",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DfwokM3I8i93GamFDFdimQHaE8%26pid%3DApi%26h%3D160&f=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cool mountain story",
          homepageId: 2,
          content:
            "A mountain is a large landform that rises above the surrounding land in a limited area, usually in the form of a peak. A mountain is generally considered to be steeper than a hill. Mountains are formed through tectonic forces or volcanism.These forces can locally raise the surface of the earth. Mountains erode slowly through the action of rivers, weather conditions, and glaciers.",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DfwokM3I8i93GamFDFdimQHaE8%26pid%3DApi%26h%3D160&f=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "why i love pots",
          homepageId: 1,
          content:
            "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form. Major types include earthenware, stoneware and porcelain.The place where such wares are made by a potter is also called a pottery (plural.",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DfwokM3I8i93GamFDFdimQHaE8%26pid%3DApi%26h%3D160&f=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "what to use your pots for",
          homepageId: 1,
          content:
            "Pottery is the process and the products of forming vessels and other objects with clay and other ceramic materials, which are fired at high temperatures to give them a hard, durable form. Major types include earthenware, stoneware and porcelain.The place where such wares are made by a potter is also called a pottery (plural).",
          imageUrl:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DfwokM3I8i93GamFDFdimQHaE8%26pid%3DApi%26h%3D160&f=1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
