const Ride = require("../models/ride");

const getOneRide = async (req, res) => {
  try {
    const rideId = req.params.id;
    const ride = await Ride.findById(rideId);
    if (!ride) {
      return res.status(404).json({ message: "Ride not found" });
    }
    res.status(200).json(ride);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.status(200).json(rides);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const createRide = async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    const savedRide = await newRide.save();
    res.status(201).json(savedRide);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const updateRide = async (req, res) => {
  try {
    const rideId = req.params.id;
    const updatedRide = await Ride.findByIdAndUpdate(rideId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRide) {
      return res.status(404).json({ message: "Ride not found" });
    }
    res.status(200).json(updatedRide);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

const deleteRide = async (req, res) => {
  try {
    const rideId = req.params.id;
    const deletedRide = await Ride.findByIdAndDelete(rideId);
    if (!deletedRide) {
      return res.status(404).json({ message: "Ride not found" });
    }
    res.status(200).json({ deletedRide, message: "Ride successfully deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

// Additional function to get rides by customer
const getRidesByCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const rides = await Ride.find({ customer: customerId });
    res.status(200).json(rides);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

// Additional function to get rides by driver
const getRidesByDriver = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    const rides = await Ride.find({ driver: driverId });
    res.status(200).json(rides);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Internal error occurred: ${err.message}` });
  }
};

module.exports = {
  getOneRide,
  getAllRides,
  createRide,
  updateRide,
  deleteRide,
  getRidesByCustomer,
  getRidesByDriver,
};
