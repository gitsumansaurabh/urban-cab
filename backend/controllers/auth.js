const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Driver = require("../models/driver");
const Customer = require("../models/customer");

const driverLogin = async (req, res) => {
  try {
    const { phoneNo, password } = req.body;
    const existingDriver = await Driver.findOne({ phoneNo });
    if (!existingDriver) {
      return res.status(409).json({ message: "Driver not exists" });
    }
    const passwordMatched = await bcrypt.compare(
      password,
      existingDriver.password
    );
    if (!passwordMatched) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: existingDriver._id,
        name: existingDriver.name,
        phoneNo: existingDriver.phoneNo,
      },
      process.env.JWT_SECRET
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const driverSignup = async (req, res) => {
  try {
    const { phoneNo, password } = req.body;
    const existingDriver = await Driver.findOne({ phoneNo });
    if (existingDriver) {
      return res.status(409).json({ message: "Driver already exists" });
    }
    // OTP validation logic here
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newDriver = new Driver(req.body);
    newDriver.password = hashedPassword;
    await newDriver.save();

    const token = jwt.sign(
      {
        id: newDriver._id,
        name: newDriver.name,
        phoneNo: newDriver.phoneNo,
      },
      process.env.JWT_SECRET
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const customerLogin = async (req, res) => {
  try {
    const { phoneNo, password } = req.body;
    const existingCustomer = await Customer.findOne({ phoneNo });
    if (!existingCustomer) {
      return res.status(409).json({ message: "Customer not exists" });
    }
    const passwordMatched = await bcrypt.compare(
      password,
      existingCustomer.password
    );
    if (!passwordMatched) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: existingCustomer._id,
        name: existingCustomer.name,
        phoneNo: existingCustomer.phoneNo,
      },
      process.env.JWT_SECRET
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const customerSignup = async (req, res) => {
  try {
    const { phoneNo, password } = req.body;
    const existingDriver = await Customer.findOne({ phoneNo });
    if (existingDriver) {
      return res.status(409).json({ message: "Customer already exists" });
    }
    // OTP validation logic here
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newDriver = new Customer(req.body);
    newDriver.password = hashedPassword;
    await newDriver.save();
    const token = jwt.sign(
      {
        id: newDriver._id,
        name: newDriver.name,
        phoneNo: newDriver.phoneNo,
      },
      process.env.JWT_SECRET
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  driverLogin,
  driverSignup,
  customerLogin,
  customerSignup,
};
