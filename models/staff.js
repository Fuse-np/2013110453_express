const mongoose = require('mongoose');
const Schema = mongoose.Schema

const staffSchema = new Schema({
  name: { type: String, required: true, trim: true },
  salary: { type: Number },
  photo: { type: String, default: "nopic.png" },
  created: { type: Date, default: Date.now },
});

const staff = mongoose.model("Staff",staffSchema)

module.exports = staff

