const express = require("express");
const router = express.Router();
const {
  getOneRide,
  getAllRides,
  createRide,
  updateRide,
  deleteRide,
  getRidesByCustomer,
  getRidesByDriver,
} = require("../controllers/ride");

router.get("/", getAllRides);
router.get("/:id", getOneRide);
router.post("/", createRide);
router.put("/:id", updateRide);
router.delete("/:id", deleteRide);
router.get("/:customerId", getRidesByCustomer);
router.get("/:driverId", getRidesByDriver);

module.exports = router;
