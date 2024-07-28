const express = require('express');
const app = express();
const port = 5173;

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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
