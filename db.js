const mongoose = require("mongoose");
require("dotenv").config();

// define the MongoDB connextion URL

// const MongoDB_URL = process.env.MongoDB_URL_LOCAL; // replace 'mydatabase' with your database name
const MongoDB_URL = process.env.MongoDB_URL;

// set up the MongoDB connection

mongoose.connect(MongoDB_URL, {
  // useNewUrlParser : true,
  // useUnifiedTopology : true
});

// Get the default connection
// Mongoose maintains a default connextion object representing the MongoDB connection

const db = mongoose.connection;

// define event listener

db.on("connected", () => {
  console.log("connection is established and connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export the database connection
module.exports = db;
