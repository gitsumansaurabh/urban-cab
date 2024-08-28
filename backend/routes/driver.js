const express = require("express");
const router = express.Router();
const {
  getOneDriver,
  getAllDriver,
  createDriver,
  updateDriver,
  deleteDriver,
} = require("../controllers/driver");

router.get("/:id", getOneDriver);
router.post("/", createDriver);
router.put("/:id", updateDriver);
router.delete("/:id", deleteDriver);
router.get("/", getAllDriver);

module.exports = router;
