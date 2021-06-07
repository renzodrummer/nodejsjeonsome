const express = require('express');

const router = express.Router();
const controller = require('../controllers/controller')

router.get("/", controller.AllUser);

router.get("/one", controller.GetUser);

router.post("/create", controller.CreateUser);

router.put("/update", controller.UpdateUser);

router.delete("/delete", controller.DeleteUser);

module.exports = router;