'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: DataTypes.INTEGER,
    plantId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    waterFreq: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};