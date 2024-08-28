const express = require("express");
const router = express.Router();
const {
  getOneCustomer,
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer");

router.get("/", getAllCustomers);
router.get("/:id", getOneCustomer);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router;
