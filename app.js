const express = require('express');
const app = express();
const port = 5173;

// convert req, res => json
app.use(express.json());

// config routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/students', (req, res) => {
  res.send('Student List');
});

app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Student Details ID: ${id}`);
});

app.post('/students', (req, res) => {
  const student = req.body;
  console.log('🚀CHECK  student =', student);
  res.send(`Add New Student`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
