'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    userId: DataTypes.INTEGER,
    plantId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    complete: DataTypes.BOOLEAN,
    dueDate: DataTypes.DATE
  }, {});
  ToDo.associate = function(models) {
    Todo.belongsTo(models.User, { foreignKey: 'userId' });
    ToDo.belongsTo(models.Plant, { foreignKey: 'plantId' });
  };
  return ToDo;
};
