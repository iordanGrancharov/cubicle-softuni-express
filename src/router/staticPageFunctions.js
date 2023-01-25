const cubes = require("../config/database.json");

exports.getHomePage = (req, res) => {
  res.render("home", { cubes });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};
