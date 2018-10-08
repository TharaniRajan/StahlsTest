var express = require("express");
var router = express.Router();
const controller = require("../../controllers/controller");

router.put("/update", controller.updateTimeFrequency)
router.get("/get", controller.getTimeFrequency)
router.put("/updateCount", controller.updateMigrationCount)
router.get("/getCount", controller.getMigrationCount)

module.exports = router;