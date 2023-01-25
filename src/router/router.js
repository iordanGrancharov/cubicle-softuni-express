const dinamicPageFunctions = require("./dinamicPageFunctions");
const staticPageFunctions = require("./staticPageFunctions");
const router = require("express").Router();

router.get("/", staticPageFunctions.getHomePage);
router.get("/about", staticPageFunctions.getAboutPage);
router.get("/create", dinamicPageFunctions.getCreateCube);
router.get("/details/:cubeId", staticPageFunctions.getDetailsCube);
router.get("/404", (req, res) => res.render("404"));

router.post("/create", dinamicPageFunctions.postCreateCube);

module.exports = router;
