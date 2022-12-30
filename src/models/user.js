const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is a required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is a required"],
    },
    email: {
      type: String,
      required: [true, "Email is a required"],
    },
    password: {
      type: String,
      required: [true, "Password is a required"],
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("user", userSchema);
