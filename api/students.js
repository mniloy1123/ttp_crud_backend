const express = require("express");
const router = express.Router();
const { Students, Campuses } = require("../db/models");

//Root here is localhost:8080/api/students/
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Students.findAll({
      include: Campuses
    });

    allStudents
      ? res.status(200).json(allStudents)
      : res.status(404).send("Students Listing Not Found");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id, {
      include: Campuses
    });
    
    if (!student) {
      return res.status(404).send('Student Not Found');
    }
    
    res.json(student);
  } catch (error) {
    next(error);
  }
})

router.put("/:id", async(req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);

    if (!student) {
      return res.status(404).send("Student Not Found");
    }

    const updatedStudent = await student.update(req.body);
    res.status(200).json(updatedStudent);
  } catch (error) {
    next(error);
    
  }
})


module.exports = router;
