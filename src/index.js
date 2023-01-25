const express = require("express");
const handlebars = require("express-handlebars");
const config = require("./config/config");

const app = express();
app.use(express.static("public"));

app.engine("hbs", handlebars.engine());
app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(config.port, () =>
  console.log(`Listening on port ${config.port}! Now its up to you...`)
);
