// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        Weight: DataTypes.INTEGER,
        Sets: DataTypes.INTEGER,
        Reps: DataTypes.INTEGER,
        Duration: DataTypes.INTEGER,
        Distance: DataTypes.INTEGER
      })
      Activity.associate = function(models){
        Activity.belongsTo(models.Workout,{
            foreignKey:{
                allowNull: false
            }
        });
        Activity.hasOne(models.Exercise, {
            onDelete: "cascade"
        });
      };

    return Activity;
  };
  
  
  
  // // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
  // module.exports = function (sequelize, DataTypes) {
  //   // -- DEFINE SEQUELIZE MODEL -- //
  
  
  //   // -- DONT FORGET TO RETURN YOUR MODEL (NEW OBJECT) -- //
  //   return // (???);
  // };
  