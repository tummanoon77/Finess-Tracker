// // -- CREATE AN EXERCISE MODEL DEFINITION -- //

// // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
module.exports = function (sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Date: {
        type: DataTypes.DATEONLY,
        get: function() {
            return moment.utc(this.getDataValue('CreateDate')).format('YYYY-MM-DD')
        }
    }
   
      });
      Workout.associate = function(models){

        Workout.hasMany(models.Activitie, {
            onDelete: "cascade"
        
      });
    };
    return Workout;
  };
  
  
  
  // // -- DO WE WANT TO GIVE THEM AN EXAMPLE OR CREATE IT FROM SCRATCH ?? -- //
  // module.exports = function (sequelize, DataTypes) {
  //   // -- DEFINE SEQUELIZE MODEL -- //
  
  
  //   // -- DONT FORGET TO RETURN YOUR MODEL (NEW OBJECT) -- //
  //   return // (???);
  // };
  