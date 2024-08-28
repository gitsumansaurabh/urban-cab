const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    is_email_verified: {
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
    total_rides: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
