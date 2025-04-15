const express = require("express");
const app = express();
const cors = require("cors");
require("./MongoDB/mongoose"); // Import the mongoose connection
const UserModel = require("./MongoDB/UserModel"); // Import the UserModel

app.use(cors());

app.use(express.json());

app.post("/user", async (req, res) => {
  try {
    const NewUser = await new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role,
      designation: req.body.designation,
    });
    await NewUser.save();
    console.log("User Created Successfully");
    return res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({ message: "Error saving user" });
  }
});
app.get("/list", async (req, res) => {
  try {
    const users = await UserModel.find({});
    console.log("User Data", users);
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Error fetching users" });
  }
});
app.post("/delete", async (req, res) => {
  try {
    const userEmail = req.body.email; // Get the user ID from the request body
    if (!userEmail) {
      return res.status(400).json({ message: "record not found" });
    }
    await UserModel.deleteOne({ email: userEmail }); // Use the ID to delete the user
    console.log("User Deleted Successfully");
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Error deleting user" });
  }
});
app.post("/update", async (req, res) => {
  try {
    console.log("req.body", req.body);
    const userEmail = req.body.email; // Get the user ID from the request body
    if (!userEmail) {
      return res.status(400).json({ message: "record not found" });
    }
    console.log("userEmail", userEmail);
    await UserModel.updateOne(
      { email: userEmail },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          role: req.body.role,
          designation: req.body.designation,
        },
      }
    ); // Use the ID to update the user
    console.log("User Updated Successfully");
    return res.status(200).json({ message: "User Updated Successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Error updating user" });
  }
});
app.get("/search", async (req, res) => {
  try {
    console.log("req.query", req.query);
    console.log("req.body", req.query.name);
    const searchTerm = req.query.name; // Get the search term from the query parameters
    if (!searchTerm) {
      return res.status(400).json({ message: "Search term is required" });
    }
    const users = await UserModel.find({
      $or: [
        { firstName: { $regex: searchTerm, $options: "i" } },
        { lastName: { $regex: searchTerm, $options: "i" } },
      ],
    });
    console.log("Search Results", users);
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error searching users:", error);
    return res.status(500).json({ message: "Error searching users" });
  }
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
