const Driver = require("../models/driver");

const getOneDriver = async (req, res) => {
  try {
    const driverId = req.params.id;
    const response = await Driver.findById(driverId);
    if (!response) {
      return res.status(404).json({ message: `Driver Not Found` });
    }
    res.status(200).json(response);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const getAllDriver = async (req, res) => {
  try {
    const response = await Driver.find();
    res.status(200).json(response);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const createDriver = async (req, res) => {
  try {
    const { phoneNo } = req.body;
    const existingDriver = await Driver.findOne({ phoneNo });
    if (existingDriver) {
      return res.status(409).json({ message: "Driver already exists" });
    }
    const newDriver = new Driver(req.body);
    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const deleteDriver = async (req, res) => {
  try {
    const driverId = req.params.id;
    const deletedDriver = await Driver.findByIdAndDelete(driverId);
    if (!deletedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res
      .status(200)
      .json({ deletedDriver, message: "Driver successfully deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const updateDriver = async (req, res) => {
  try {
    const driverId = req.params.id;
    const updatedDriver = await Driver.findByIdAndUpdate(driverId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedDriver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.status(200).json(updatedDriver);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

module.exports = {
  getOneDriver,
  getAllDriver,
  createDriver,
  updateDriver,
  deleteDriver,
};
