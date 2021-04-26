const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const attirechema = new Schema ({
  name: String,
  description: String,
  fabric: String,
  availability: [
    {
      amount: Number,
      size: String,
      color: String
    }
  ],
  price: Number,
  pictureUrl: String,
  type: String
});

module.exports = model("Attire", attirechema);