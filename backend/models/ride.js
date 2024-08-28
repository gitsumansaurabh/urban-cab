const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema(
  {
    customer_name: {
      type: String,
      required: true,
    },
    customer_id: {
      type: String,
      required: true,
    },
    driver_name: {
      type: String,
      required: true,
    },
    driver_id: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    total_time: {
      type: Number,
      required: true,
    },
    payment_method: {
      type: String,
      enum: ["cash", "card", "upi"],
    },
  },
  {
    timestamp: true,
  }
);

const Ride = mongoose.model("Ride", rideSchema);
module.exports = Ride;
