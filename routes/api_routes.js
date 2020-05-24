const express = require('express')
// -- BRING IN THE `EXPRESS ROUTER` -- //
const router = express.Router()

const ExerciseCntrl = require('../controllers/exerciseCntrl');

// -- USE MVC ARCHITECTURE --> HAVE CLEAN ROUTES AND MOVE THE LOGIC TO THE /CONTROLLERS DIRECTORY -- //


// GET  "/""
// Calls controller which will return all activities for a specific workout
router.get("/", ExerciseCntrl.getAll);

// -- ADD ADDITIONAL ROUTES -- //
router.post("/workout", function(req, res, next) {
  return UserCntrl.create(req, res, next);
});

router.post("/exercise", function(req, res, next) {
    return UserCntrl.create(req, res, next);
});

router.post("/activitie:id", function(req, res, next) {
    return UserCntrl.create(req, res, next);
}); 
module.exports = router

