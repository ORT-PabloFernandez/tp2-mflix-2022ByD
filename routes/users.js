var express = require('express');
var router = express.Router();
const controller = require("../controllers/users");
/* GET users listing. */
router.get("/", async (req, res) => {
  res.json(await controller.getUsers());
});
router.get("/getComments", async (req, res) => {
res.json(await controller.getCommentsId(req.query.id));
});
module.exports = router;
