const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;
const CoursesSchema = new Schema({
  name: { type: String, required: true, minlength: 2, unique:[true, "This Course is Already Present"]},

  img: {
    data: Buffer,
    contentType: String,
  },

  university: { type: String, required: true, minlength: 2 },

  faculty_profile: { type: String, required: true, minlength: 2 },

  duration: {type:Number, required:true},

  price: {type:Number, required:true},

  certificate: { type: String, required: true, minlength: 2 },

  eligibility: { type: String, required: true, minlength: 2 },
});


// New Courses Collection
const Course = new mongoose.model('Course', CoursesSchema);
module.exports = Course;