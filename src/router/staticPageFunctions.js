let cubes = require("../config/database.json");

exports.getHomePage = (req, res) => {
  let { search, from, to } = req.query;
  let buffer = Array.from(cubes);
  if (search) {
    buffer = buffer.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (from) {
    buffer = buffer.filter(
      (cube) => Number(cube.difficultyLevel) >= Number(from)
    );
  }

  if (to) {
    buffer = buffer.filter(
      (cube) => Number(cube.difficultyLevel) <= Number(to)
    );
  }

  res.render("home", { buffer, search, from, to });
};

exports.getDetailsCube = (req, res) => {
  const cubeId = Number(req.params.cubeId);
  if (!cubeId || cubeId == 0) {
    res.redirect("/404");
  }
  const cube = cubes.find((x) => x.id === cubeId);

  if (!cube) {
    res.redirect("/404");
  }
  res.render("details", { cube });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};
