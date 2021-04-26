const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userschema = new Schema({
  username: {
  type: String,
  required: true
},
password: {
  type: String,
  required: true
},
email: {
  type: String,
  required: true
},
  role: String //admin,reader,writer,super
});

module.exports = model("user", userschema);