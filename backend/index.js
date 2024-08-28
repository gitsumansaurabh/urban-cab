const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const { connectDB } = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/", routes);

connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log("Server Started !!");
    })
  )
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
