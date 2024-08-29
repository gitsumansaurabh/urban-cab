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
    const searchObj = {};
    const filter = req.query;
    const excludedFields = ["page", "limit"];
    for (key in filter) {
      if (!excludedFields.includes([key])) {
        if (filter[key] === "customer_name" || filter[key] === "driver_name") {
          searchObj[key] = { $regex: filter[key], $options: "i" };
        } else if (searchObj[key] === "price") {
          const rideFilter = [key].split(",");
          if (rideFilter.length === 2) {
            searchObj[key] = {
              $gte: parseInt(rideFilter[0]),
              $lte: parseInt(rideFilter[1]),
            };
          } else {
            searchObj[key] = parseInt(filter[key]);
          }
        }
      }
    }
    // Pagination
    const page = parseInt(filter.page) || 1;
    const limit = parseInt(filter.limit) || 10;
    const skip = (page - 1) * limit;

    const customers = await Customer.find(searchObj).skip(skip).limit(limit);

    const totalCustomers = await Customer.countDocuments(searchObj);

    res.status(200).json({
      status: "success",
      results: customers.length,
      totalCustomers,
      currentPage: page,
      totalPages: Math.ceil(totalCustomers / limit),
      data: customers,
    });
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
