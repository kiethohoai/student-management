const express = require('express');
const app = express();
const port = 5173;

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

// convert req, res => json
app.use(express.json());

// config routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

// todo Get all students
app.get('/students', (req, res) => {
  res.status(200).send(studentList);
});

// todo Get student details
app.get('/students/:id', (req, res) => {
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
app.post('/students', (req, res) => {
  let student = req.body;
  student = {
    ...student,
    id: Math.random(),
  };

  studentList.push(student);
  res.status(201).send(student);
});

// todo Update a Student
app.put('/students/:id', (req, res) => {
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
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Delete Student ID: ${id}`);
});

app.listen(port, () => {});
