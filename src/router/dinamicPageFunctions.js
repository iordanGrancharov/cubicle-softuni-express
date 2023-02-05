const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

exports.getCreateCube = (req, res) => {
  res.render("create");
};

exports.postCreateCube = (req, res) => {
  //req.body
  let { name, description, imageUrl, difficultyLevel } = req.body;
  let cube = new Cube({ name, description, imageUrl, difficultyLevel });
  //save
  cube.save();
  //redirect
  res.redirect("/");
};

exports.getCreateAccesoriesPage = (req, res) => {
  res.render("addAccessories");
};

exports.getAttachAccesoriesPage = async (req, res) => {
  const accessories = await Accessory.find().lean();
  const cube = await Cube.findById(req.params.cubeId);
  res.render("attachAccessory", { accessories, cube });
};

exports.createAccessory = async (req, res) => {
  const { name, description, imageUrl } = req.body;

  await Accessory.create({ name, description, imageUrl });
  res.redirect("/");
};

exports.postAttachAccesoriesPage = async (req, res) => {
  const cube = await Cube.findById(req.params.cubeId);
  const accessory = req.body.accessory;

  cube.accessories.push(accessory);
  cube.save();

  res.redirect(`/details/${cube._id}`);
};
