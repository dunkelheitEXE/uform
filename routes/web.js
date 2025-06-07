const express = require('express');
const router = express.Router();
const controller = require("../controllers/IndexController");
const userController = require("../controllers/RegisteredUserController");

router.get("/", controller.showIndex);
router.get("/signup", userController.create);

module.exports = router;