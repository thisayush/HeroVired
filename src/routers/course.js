const express = require("express");
const router = new express.Router();
const Course = require("../models/courses");
//USING POST METHOD

// router.post("/course", (req, res) => {
//   console.log(req.body);
//   const user = new Course(req.body);
//   user
//     .save()
//     .then(() => {
//       res.send(user);
//     })
//     .catch((e) => {
//       res.send(e);
//     });
// });

//USING ASYNC AWAIT for POST Method

//CREATE COURSE METHOD
router.post("/course", async (req, res) => {
  try {
    const user = new Course(req.body);
    const createCourse = await user.save();
    res.send(createCourse);
  } catch (e) {
    res.send(e);
  }
});

//GET ALL COURSES

router.get("/course", async (req, res) => {
  try {
    const courseData = await Course.find();
    res.send(courseData);
  } catch {
    res.send(e);
  }
});

//get individual courses
router.get("/course/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const coursedata = await Course.findById(_id);
    console.log(coursedata);

    if (!coursedata) {
      return res.status(404).send();
    } else {
      res.send(coursedata);
    }
  } catch (e) {
    res.send(e);
  }
});

//UPDATE COURSES
router.patch("/course/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateCourse = await Course.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateCourse);
  } catch (e) {
    res.status(400).send(e);
  }
});

// DELETE Course

router.delete("/course/:id", async (req, res) => {
  try {
    const deleteCourse = await Course.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteCourse);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
