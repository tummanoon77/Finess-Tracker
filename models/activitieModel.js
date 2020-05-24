// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
    var Activitie = sequelize.define("Activitie", {
        Weight: DataTypes.INTEGER,
        Sets: DataTypes.INTEGER,
        Reps: DataTypes.INTEGER,
        Duration: DataTypes.INTEGER,
        Distance: DataTypes.INTEGER
      })
      Activitie.associate = function(models){

        Activitie.belongTo(models.Workout,{
            foreignKey:{
                allowNull: false
            }
        });
      };

    return Activitie;
  };
  
  
  
  // // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
  // module.exports = function (sequelize, DataTypes) {
  //   // -- DEFINE SEQUELIZE MODEL -- //
  
  
  //   // -- DONT FORGET TO RETURN YOUR MODEL (NEW OBJECT) -- //
  //   return // (???);
  // };
  