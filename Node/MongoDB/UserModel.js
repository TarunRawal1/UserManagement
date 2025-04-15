const mongoose = require("./mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4(),
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === "admin" || value === "user";
      },
      message: "Role must be either 'admin' or 'user'",
    },
  },
  designation: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return (
          value === "Manager" ||
          value === "manager" ||
          value === "developer" ||
          value === "Developer"
        );
      },
      message: "Designation must be either 'Manager' or 'Developer'",
    },
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
