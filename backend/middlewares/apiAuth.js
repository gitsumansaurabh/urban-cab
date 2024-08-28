const jwt = require("jsonwebtoken");
const Driver = require("../models/driver");
const Customer = require("../models/customer");

const driverAuthentication = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.id) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    const existingDriver = await Driver.findById(decoded.id);
    if (!existingDriver) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: `Internal error occured ${err}` });
  }
};

const customerAuthentication = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.id) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    const existingCustomer = await Customer.findById(decoded.id);
    if (!existingCustomer) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    next();
  } catch (err) {
    return res.status(401).json({ message: `Internal error occured ${err}` });
  }
};

module.exports = {
  driverAuthentication,
  customerAuthentication,
};
