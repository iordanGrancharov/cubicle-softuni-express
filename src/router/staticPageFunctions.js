const Cube = require("../models/Cube");

exports.getHomePage = async (req, res) => {
  let { search, from, to } = req.query;

  let pattern = new RegExp(`${search}`, "i");
  let cubes = await Cube.find().lean();

  if (search && !from && !to) {
    cubes = await Cube.find({
      name: { $regex: pattern },
    }).lean();
  }

  if (!search && from && !to) {
    from = Number(from);
    cubes = await Cube.find({
      difficultyLevel: { $gte: from },
    }).lean();
  }

  if (!search && !from && to) {
    to = Number(to);
    cubes = await Cube.find({
      difficultyLevel: { $lte: to },
    }).lean();
  }

  if (search && from && !to) {
    from = Number(from);
    cubes = await Cube.find({
      $and: [
        {
          name: { $regex: pattern },
          difficultyLevel: { $gte: from },
        },
      ],
    }).lean();
  }

  if (search && !from && to) {
    to = Number(to);
    cubes = await Cube.find({
      $and: [
        {
          name: { $regex: pattern },
          difficultyLevel: { $lte: to },
        },
      ],
    }).lean();
  }

  if (!search && from && to) {
    from = Number(from);
    to = Number(to);
    cubes = await Cube.find({
      difficultyLevel: { $gte: from, $lte: to },
    }).lean();
  }

  if (search && from && to) {
    from = Number(from);
    to = Number(to);
    cubes = await Cube.find({
      $and: [
        {
          name: { $regex: pattern },
          difficultyLevel: { $gte: from, $lte: to },
        },
      ],
    }).lean();
  }

  // if (to) {
  //   cubes = cubes.filter((cube) => Number(cube.difficultyLevel) <= Number(to));
  // }

  res.render("home", { cubes, search, from, to });
};

exports.getDetailsCube = async (req, res) => {
  const cube = await Cube.findById({ _id: req.params.cubeId })
    .populate("accessories")
    .lean();

  console.log(cube);
  if (!cube) {
    res.redirect("/404");
  }
  res.render("details", { cube });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};
