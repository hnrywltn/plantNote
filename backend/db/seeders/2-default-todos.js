'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('ToDos', [
        {
          userId: 1,
          title: 'home',
          plantId: 1,
          description: 'Plant a new potato in my third raised garden container',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'start a plant',
          plantId: 6,
          description: 'get a clipping of the rosemary bush',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'home',
          plantId: 6,
          description: 'propogate some rosemary',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'maint',
          plantId: 1,
          description: 'cover the potatoes at night',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'store',
          description: 'see if Montys Plant food is good for herbs',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'store',
          description: 'pick up some soil while in Temescal',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'maint',
          plantId: 1,
          description: 'see if the potatoes are rooting',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'home/maint',
          plantId: 22,
          description: 'remember to cover mushrooms when its sunny',
          complete: false,
          dueDate: new Date(),
        },
        {
          userId: 1,
          title: 'home',
          plantId: 14,
          description: 'water the roses',
          complete: false,
          dueDate: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('ToDos', null, {});
  }
};
