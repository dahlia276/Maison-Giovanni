const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const inventorySchema = new Schema ({
  attire: {
    type: mongoose.SchemaType.ObjectId
  },
  color: String,
  size: String,
  quantity: Number
});

module.exports = model("Inventory", inventorySchema);