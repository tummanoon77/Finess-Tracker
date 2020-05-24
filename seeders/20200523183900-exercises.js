'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        
    return queryInterface.bulkInsert('Exercises', [
    {exercise_name: 'Barbell Curl',exercise_type:'Strength' ,createdAt: new Date,updatedAt: new Date},
    {exercise_name:'Stairmaster',exercise_type:'Cardiocascular',createdAt: new Date,updatedAt: new Date},
    {exercise_name: 'Lateral Curl',exercise_type:'Strength',createdAt: new Date,updatedAt: new Date },
    {exercise_name: 'Bench Press',exercise_type:'Strength',createdAt: new Date,updatedAt: new Date },
    {exercise_name:'Treadmill',exercise_type:'Cardiocascular',createdAt: new Date,updatedAt: new Date},
    {exercise_name:'Jogging',exercise_type:'Cardiocascular',createdAt: new Date,updatedAt: new Date},
   ], {});
   },

down: (queryInterface, Sequelize) => {
 
    return queryInterface.bulkDelete('Exercises', null, {});
  
  }
};
