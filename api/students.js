const express = require("express");
const router = express.Router();
const { Students } = require("../db/models");

//Root here is localhost:8080/api/students/
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Students.findAll();

    allStudents
      ? res.status(200).json(allStudents)
      : res.status(404).send("Students Listing Not Found");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id)
    
    if (!student) {
      return res.status(404).send('Student Not Found');
    }
    
    res.json(student);
  } catch (error) {
    next(error);
  }
})


module.exports = router;
