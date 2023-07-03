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

router.post("/", async (req, res, next) => {
  let { name, imageUrl, address, description } = req.body;
    
  // If imageUrl is an empty string, set it to undefined
  //so that the default image url will be used
  if (imageUrl === '') {
    imageUrl = undefined;
  }
  try {
    const newCampus = await Campuses.create({name, imageUrl, address, description});
    res.status(201).json(newCampus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
