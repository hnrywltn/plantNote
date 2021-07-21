'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    userId: DataTypes.INTEGER,
    plantId: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    waterFreq: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User, {foreignKey: 'userId'});
    Note.belongsTo(models.Plant, {foreignKey: 'plantId'});
  };
  return Note;
};
