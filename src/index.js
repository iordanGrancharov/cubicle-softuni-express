const express = require("express");
const setupHandlebars = require("./config/setupViewEngine");
const config = require("./config/config");
const router = require("./router/router");
const initDB = require("./config/dataBaseInit");

const app = express();

setupHandlebars(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(router);

initDB().then(() => app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}! Now its up to you...`)
)).catch(e) {
  console.log(e.message);
}


