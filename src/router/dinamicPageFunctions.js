const cubes = require("../config/database.json");
const Cube = require("../utils/classCube");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = (req, res) => {
  //req.body
  let { name, description, imageUrl, difficultyLevel } = req.body;
  let cube = new Cube(name, description, imageUrl, difficultyLevel);
  //save
  cube.save();
  //redirect
  res.redirect("/");
};
