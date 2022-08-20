const express = require("express");
require("./db/conn");
const Course = require("./models/courses");
const CourseRouter = require("./routers/course");
const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.use(CourseRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
