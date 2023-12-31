const express = require("express");
const router = express.Router();
const { Campuses, Students } = require("../db/models/");

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

router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campuses.findByPk(req.params.id, {
      include: [Students] 
    });
    
    if (!campus) {
      return res.status(404).send('Campus Not Found');
    }
    
    res.json(campus);
  } catch (error) {
    next(error);
  }
})

router.get("/:id/students", async (req, res, next) => {
  try {
    const students = await Students.findAll({
      where: {
        campusId: req.params.id,
      },
    });

    if (!students) {
      return res.status(404).send("Students Not Found");
    }

    res.json(students);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  let { name, imageUrl, address, description } = req.body;

  // If imageUrl is an empty string, set it to undefined
  //so that the default image url will be used
  if (imageUrl === "") {
    imageUrl = undefined;
  }
  try {
    const newCampus = await Campuses.create({
      name,
      imageUrl,
      address,
      description,
    });
    res.status(201).json(newCampus);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async(req, res, next) => {
  try {
    const campus = await Campuses.findByPk(req.params.id);

    if (!campus) {
      return res.status(404).send("Campus Not Found");
    }

    const updatedCampus = await campus.update(req.body);
    res.status(200).json(updatedCampus);
  } catch (error) {
    next(error);
    
  }
})


router.delete("/:id", async (req, res, next) => {
  try {
    const campus = await Campuses.findByPk(req.params.id);

    if (!campus) {
      return res.status(404).send("Campus Not Found");
    }

    await campus.destroy();
    res.status(204).send("Campus Deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
