const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Management").then(() => {
  console.log("Connected to MongoDB");
});

module.exports = mongoose;
