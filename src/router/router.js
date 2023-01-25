const dinamicPageFunctions = require("./dinamicPageFunctions");
const staticPageFunctions = require("./staticPageFunctions");
const router = require("express").Router();

router.get("/", staticPageFunctions.getHomePage);
router.get("/about", staticPageFunctions.getAboutPage);
router.get("/create", dinamicPageFunctions.getCreateCube);

router.post("/create");

module.exports = router;
