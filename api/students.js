const express = require("express");
const router = express.Router();
const { Students, Campuses } = require("../db/models");

//Root here is localhost:8080/api/students/
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Students.findAll({
      include: Campuses,
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
      include: Campuses,
    });

    if (!student) {
      return res.status(404).send("Student Not Found");
    }

    res.json(student);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);

    if (!student) {
      return res.status(404).send("Student Not Found");
    }
    console.log(req.body);

    const updatedStudent = await student.update(req.body);
    res.status(200).json(updatedStudent);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id);

    if (!student) {
      return res.status(404).send("Student Not Found");
    }

    await student.destroy();
    res.status(204).send("Student Deleted");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  let { firstName, lastName, email, imageUrl, gpa } = req.body;
  // Check if the imageUrl is valid
  try {
    const newStudent = await Students.create({
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
