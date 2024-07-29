const express = require('express');
const studentRouter = express.Router();

const studentList = [
  {
    id: 1,
    fullName: 'Le Thi Dao',
    age: 18,
    numberClass: 12,
  },
  {
    id: 2,
    fullName: 'Ngo Van Buoi',
    age: 17,
    numberClass: 11,
  },
  {
    id: 3,
    fullName: 'Le Thi Chuoi',
    age: 16,
    numberClass: 10,
  },
];

// todo Get all students
studentRouter.get('/', (req, res) => {
  res.status(200).send(studentList);
});

// todo Get student details
studentRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  const index = studentList.findIndex((student) => {
    return student.id == id;
  });

  if (index !== -1) {
    const student = studentList[index];
    res.status(200).send(student);
  } else {
    res.status(404).send('Not found!');
  }
});

// todo Add new Student
studentRouter.post('/', (req, res) => {
  let student = req.body;
  student = {
    ...student,
    id: Math.random(),
  };

  studentList.push(student);
  res.status(201).send(student);
});

// todo Update a Student
studentRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const { fullName, age, numberClass } = req.body;
  let index = studentList.findIndex((student) => student.id === +id);

  if (index !== -1) {
    studentList[index] = { ...studentList[index], fullName, age, numberClass };
    res.status(200).send(studentList[index]);
  } else {
    res.status(404).send(`Can't not update!`);
  }
});

// todo Delete a Student
studentRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  let index = studentList.findIndex((el) => el.id == id);
  if (index !== -1) {
    const studentDelete = studentList[index];
    studentList.splice(index, 1);
    res.status(200).send(studentDelete);
  } else {
    res.status(404).send(`NOT FOUND!`);
  }
});

module.exports = studentRouter;
