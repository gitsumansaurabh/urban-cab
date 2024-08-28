const Customer = require("../models/customer");

const getOneCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(customer);
  } catch (err) {
    console.error("Error in getOneCustomer:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    console.error("Error in getAllCustomers:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createCustomer = async (req, res) => {
  try {
    const { phoneNo } = req.body;
    const existingCustomer = await Customer.findOne({ phoneNo });
    if (existingCustomer) {
      return res.status(409).json({ message: "Customer already exists" });
    }
    const newCustomer = new Customer(req.body);
    const savedCustomer = await newCustomer.save();
    res
      .status(201)
      .json({ customer: savedCustomer, message: "New customer created" });
  } catch (err) {
    console.error("Error in createCustomer:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const updatedCustomer = await Customer.findByIdAndUpdate(
      customerId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res
      .status(200)
      .json({ customer: updatedCustomer, message: "Customer details updated" });
  } catch (err) {
    console.error("Error in updateCustomer:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const deletedCustomer = await Customer.findByIdAndDelete(customerId);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer successfully deleted" });
  } catch (err) {
    console.error("Error in deleteCustomer:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getOneCustomer,
  getAllCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
