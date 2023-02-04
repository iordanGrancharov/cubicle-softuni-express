const { Schema, model } = require("mongoose");

const cubeScheme = new Schema({
  name: {
    type: String,
    requred: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 40,
  },
  imageUrl: {
    type: String,
    requred: true,
    validate: {
      validator: function (value) {
        return value.startsWith("http://") || value.startsWith("https://");
      },
      message: "Invalid imageURL!",
    },
  },
  difficultyLevel: {
    type: Number,
    min: 1,
    max: 6,
  },
});

const Cube = model("Cube", cubeScheme);

module.exports = Cube;
