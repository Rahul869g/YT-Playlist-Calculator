const express = require("express");
const router = express.Router();
const linkController = require("../../controllers/linkController");

router
  .route("/")
  // .get(linkController.getLinksByUserId)
  .post(linkController.calculateDuration);

module.exports = router;
