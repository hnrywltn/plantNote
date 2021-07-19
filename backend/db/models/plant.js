'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define('Plant', {
    name: DataTypes.STRING,
    binomialName: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    sunRequirements: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Plant.associate = function(models) {
    // associations can be defined here
  };
  return Plant;
};