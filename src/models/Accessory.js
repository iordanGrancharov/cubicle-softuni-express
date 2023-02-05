const { Schema, model } = require("mongoose");

const accessorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    regex: /^http[s]{0,1}:\/\//,
  },
  description: {
    type: String,
    required: true,
    maxLength: 40,
  },
});

module.exports = model("Accessory", accessorySchema);
