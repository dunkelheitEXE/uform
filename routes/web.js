const express = require('express');
const router = express.Router();
const controller = require("../controllers/IndexController");
const userController = require("../controllers/RegisteredUserController");
const authController = require("../controllers/AuthenticatedUserController");

router.get("/", controller.showIndex);
router.get("/signup", userController.create);
router.post("/signup", userController.store);

router.get("/login", authController.create);
router.post("/login", authController.store);

module.exports = router;