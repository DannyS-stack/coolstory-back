"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class homepage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      homepage.belongsTo(models.user);
      homepage.hasMany(models.stories);
    }
  }
  homepage.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      backgroundColor: DataTypes.STRING,
      color: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "homepage",
    }
  );
  return homepage;
};
