const express = require('express');
const studentRouter = express.Router();
const {
  getStudentsAll,
  getStudentDetail,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('./../controllers/student.controllers');
const { logFeature } = require('../middlewares/logger/log-feature');

// todo Get all students
studentRouter.get('/', logFeature, getStudentsAll);

// todo Get student details
studentRouter.get('/:id', getStudentDetail);

// todo Add new Student
studentRouter.post('/', createStudent);

// todo Update a Student
studentRouter.put('/:id', updateStudent);

// todo Delete a Student
studentRouter.delete('/:id', deleteStudent);

module.exports = studentRouter;
