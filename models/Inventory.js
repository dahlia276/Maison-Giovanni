const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const inventorySchema = new Schema ({
  attire: {
    type: Schema.Types.ObjectId,
    ref: 'Attire'
  },
  color: String,
  size: String,
  quantity: Number
});

module.exports = model("Inventory", inventorySchema);