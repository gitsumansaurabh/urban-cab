const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB sucessfully connected`);
  } catch (err) {
    console.log(`MongoDB connection error ${err}`);
  }
};

module.exports = {
  connectDB,
  mongoose,
};
