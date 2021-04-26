const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const attireSchema = new Schema ({
  name: String,
  description: String,
  fabric: String,
  size: String ,
  price: Number,
  color: String,
  pictureUrl: String,
  type: String
});

module.exports = model("Attire", attireSchema);