const express = require("express");
const router = express.Router();
const { Campuses } = require("../db/models/");

//Root here is localhost:8080/api/campuses/
router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campuses.findAll();

    allCampuses
      ? res.status(200).json(allCampuses)
      : res.status(404).send("Campuses Listing Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;