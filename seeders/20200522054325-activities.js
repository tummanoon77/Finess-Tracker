'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
          
      return queryInterface.bulkInsert('Exercises', [
        { exercise_name: 'Barbell Curl',exercise_type:'Strength', Weight: 50,Sets: 5,Reps: 5 ,createdAt: new Date() },
       {exercise_name:'Stairmaster',exercise_type:'Cardiocascular', Duration: 30 ,Distance: 50 ,createdAt: new Date() },
       { exercise_name: 'Lateral Curl',exercise_type:'Strength', Weight: 25,Sets: 5,Reps: 5 ,createdAt: new Date() },
       { exercise_name: 'Bench Press',exercise_type:'Strength', Weight: 50,Sets: 5,Reps: 5 ,createdAt: new Date() },
       {exercise_name:'Treadmill',exercise_type:'Cardiocascular', Duration: 30 ,Distance: 50 ,createdAt: new Date() }
     ], {});
     },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Exercises', null, {});
    
  }
};
