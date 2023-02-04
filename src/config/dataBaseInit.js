const mongoose = require("mongoose");
const config = require("./config");

const initDB = async () => {
  mongoose.set("strictQuery", false);

  await mongoose.connect(config.DB_port);

  console.log("database connected!");
};

module.exports = initDB;
