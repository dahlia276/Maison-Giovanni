const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const customSchema = new Schema ({
  name: {
    type: String,
    required: true},
  email: {
    type: String,
    required: true},
    phone: {
      type: Number,
      required: true},
})

module.exports = model("Custom", customSchema);