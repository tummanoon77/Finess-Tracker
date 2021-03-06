// This is an example of a Controller. Note how it requires in the model(s) it needs.

const Activity = require("../models/activityModel.js");

const ActivityCntrl = {
  // This is called (when needed) from the route page when a 
  // listing of all exercises is needed
  getAll(req, res){

    // -- YOU WILL UPDATE WHAT THE "RESPONSE OBJECT" RETURNS -- //
    return new Promise(function(resolve,reject){
      db.Activity.findAll({}).then(function(results){
        res.json(results);
      })
    })

    // -- EXAMPLE SEQUELIZE DB QUERY -- //
    // Exercise.find({}).then(data => {
    //   res.json(data)
    // });
  },
  create: function(req, res, next){
    return new Promise(function(resolve, reject) {
      db.Activity.create(req.body).then(function(result) {
        res.json({ result: "success", data: result})
      });
    });
  },

}

// -- WE ARE EXPORTING (MAKING AVAILABLE TO OTHER FILES) THE CONTROLLER LOGIC (OBJECT & METHODS) -- //
module.exports = ActivityCntrl;