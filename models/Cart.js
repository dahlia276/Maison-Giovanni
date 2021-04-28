const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const cartSchema = new Schema ({
  user:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "Attire"
  }]
});

module.exports = model("Cart", cartSchema);