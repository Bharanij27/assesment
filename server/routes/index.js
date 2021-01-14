var express = require("express");
const {
  HomeController,
} = require("../controller/HomeController/HomeController");
const { UpdateController } = require("../controller/UpdateController/UpdateController");
var router = express.Router();

/* GET home page. */
router.get("/", HomeController);
router.post("/update", UpdateController);

module.exports = router;
