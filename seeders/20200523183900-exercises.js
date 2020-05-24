'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        
    return queryInterface.bulkInsert('Exercises', [
      { exercise_name: 'Barbell Curl',exercise_type:'Strength' ,},
     {exercise_name:'Stairmaster',exercise_type:'Cardiocascular',},
     { exercise_name: 'Lateral Curl',exercise_type:'Strength', },
     { exercise_name: 'Bench Press',exercise_type:'Strength', },
     {exercise_name:'Treadmill',exercise_type:'Cardiocascular',},
   ], {});
   },

down: (queryInterface, Sequelize) => {
 
    return queryInterface.bulkDelete('Exercises', null, {});
  
  }
};
