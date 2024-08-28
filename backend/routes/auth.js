const express = require("express");
const router = express.Router();
const {
  driverSignup,
  driverLogin,
  customerSignup,
  customerLogin,
} = require("../controllers/auth");

router.post("/driver/login", driverLogin);
router.post("/driver/signup", driverSignup);
router.post("/customer/login", customerLogin);
router.post("/customer/signup", customerSignup);

module.exports = router;
