'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Activities', [
        {      }
      ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Activities', null, {});
    
  }
};
