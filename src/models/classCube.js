const cubes = require("../config/database.json");
const fs = require("fs");
const path = require("path");

class Cube {
  constructor(name, description, imageUrl, difficultyLevel) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficultyLevel = difficultyLevel;
  }

  save() {
    this.id = cubes[cubes.length - 1].id + 1;
    cubes.push(this);
    const jsonCubes = JSON.stringify(cubes, null, 2);
    fs.writeFileSync(
      path.resolve(__dirname, "../config/database.json"),
      jsonCubes
    );
  }
}

module.exports = Cube;
