var express = require("express");
var router = express.Router();
const controller = require("../controllers/comments");

/* GET users listing. */
router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllComments(pageSize, page));
});

module.exports = router;
