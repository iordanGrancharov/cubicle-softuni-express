const dinamicPageFunctions = require("./dinamicPageFunctions");
const staticPageFunctions = require("./staticPageFunctions");
const router = require("express").Router();

router.get("/", staticPageFunctions.getHomePage);
router.get("/about", staticPageFunctions.getAboutPage);
router.get("/details/:cubeId", staticPageFunctions.getDetailsCube);

router.get("/404", (req, res) => res.render("404"));

router.get("/addAccessories", dinamicPageFunctions.getCreateAccesoriesPage);
router.post("/addAccessories", dinamicPageFunctions.createAccessory);

router.get(
  "/:cubeId/attachAccessories",
  dinamicPageFunctions.getAttachAccesoriesPage
);
router.post(
  "/:cubeId/attachAccessories",
  dinamicPageFunctions.postAttachAccesoriesPage
);
router.get("/create", dinamicPageFunctions.getCreateCube);
router.post("/create", dinamicPageFunctions.postCreateCube);

module.exports = router;
