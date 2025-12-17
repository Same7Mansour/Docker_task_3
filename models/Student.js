
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  phone: String,
  subject: String,
  date: String
});

module.exports = mongoose.model("Student", StudentSchema);
