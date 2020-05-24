'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Workouts', [
        {name: 'John Doe',},
        {name: 'Gary'},
        {name:'Erik'},
        {name:'Dan'}
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Workouts', null, {});
  
  }
};
