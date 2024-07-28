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
  res.send(`Student Details ID: ${id}`);
});

// todo Add new Student
app.post('/students', (req, res) => {
  const student = req.body;
  console.log('🚀CHECK  student =', student);
  res.send(`Add New Student`);
});

// todo Update a Student
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  console.log('🚀CHECK  id =', id);
  const student = req.body;
  console.log('🚀CHECK  student =', student);
  res.send(`Update Student ID = ${id}`);
});

// todo Delete a Student
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  res.send(`Delete Student ID: ${id}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
