const mongoose = require("mongoose");

const driverSchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    email_verified: {
      type: Boolean,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    driving_status: {
      type: Boolean,
      default: true,
    },
    loyality_score: {
      type: Number,
      default: 0,
    },
    total_rides: {
      type: Number,
      default: 0,
    },
    license: {
      type: String,
      required: true,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    authorized: {
      type: Boolean,
      default: false,
    },
    driving_license: {
      type: String,
    },
    cab_model: {
      type: String,
      required: true,
    },
    cab_number: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Driver = mongoose.model("Driver", driverSchmea);
module.exports = Driver;
