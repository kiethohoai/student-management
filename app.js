const express = require('express');
const app = express();
const port = 5173;

// convert req, res => json
app.use(express.json());

// config routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

// todo Get all students
app.get('/students', (req, res) => {
  res.send('Student List');
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
  console.log("🚀CHECK  id =", id)
  const student = req.body;
  console.log("🚀CHECK  student =", student)
  res.send(`Update Student ID = ${id}`);
});

// todo Delete a Student

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
