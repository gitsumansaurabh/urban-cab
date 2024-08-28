const express = require("express");
const authRouter = require("./auth");
const customerRoutes = require("./customer");
const driverRoutes = require("./driver");
const rideRoutes = require("./ride");

const router = express.Router();
router.use("/auth", authRouter);
router.use("/customer", customerRoutes);
router.use("/driver", driverRoutes);
router.use("/ride", rideRoutes);

module.exports = router;
